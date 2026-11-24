"""
Photo -> body measurements.

Input : a front photo, a side photo (person standing full-length), the
        person's height in cm.
Output: bust/chest, waist, hip circumferences (inches) with an uncertainty,
        quality warnings and an overlay image showing where we measured.

Method (2-photo silhouette model, NOT a true 3D scan):
  1. segment the person (MediaPipe pose-landmarker mask if the model file is
     present, else a classical OpenCV fallback)
  2. scale pixels -> cm using the person's height (head-top to floor)
  3. at the bust / waist / hip level read the body WIDTH from the front mask
     and the body DEPTH from the side mask
  4. circumference ~ perimeter of an ellipse with semi-axes width/2, depth/2
  5. apply per-measurement calibration (fitted from tape-measure data on the
     Lab page) and attach an uncertainty (sigma)

Photos are processed in memory only and are never written to disk.
"""
from __future__ import annotations

import base64
import json
import logging
import math
import os
from dataclasses import dataclass, field
from pathlib import Path

import cv2
import numpy as np

log = logging.getLogger("fitscan.vision")

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = Path(os.environ.get("FITSCAN_POSE_MODEL", BASE_DIR / "models" / "pose_landmarker_lite.task"))
CALIB_PATH = BASE_DIR / "data" / "calibration.json"

MAX_SIDE = 1280
BASE_SIGMA_IN = 1.5          # typical error of a 2-photo estimate, inches
FALLBACK_SIGMA_FACTOR = 1.15  # classical pipeline is a bit less reliable

# mediapipe landmark indices
LM = dict(nose=0, l_sh=11, r_sh=12, l_el=13, r_el=14, l_wr=15, r_wr=16, l_hip=23, r_hip=24,
          l_knee=25, r_knee=26, l_ank=27, r_ank=28)


class ScanError(Exception):
    pass


# --------------------------------------------------------------------------
# calibration
# --------------------------------------------------------------------------
def load_calibration() -> dict:
    default = {k: {"scale": 1.0, "offset_cm": 0.0} for k in ("bust", "waist", "hip")}
    try:
        data = json.loads(CALIB_PATH.read_text())
        for k in default:
            if k in data:
                default[k].update({kk: float(vv) for kk, vv in data[k].items() if kk in ("scale", "offset_cm")})
    except Exception:
        pass
    return default


def save_calibration(cal: dict) -> None:
    CALIB_PATH.parent.mkdir(parents=True, exist_ok=True)
    CALIB_PATH.write_text(json.dumps(cal, indent=2))


# --------------------------------------------------------------------------
# MediaPipe (optional)
# --------------------------------------------------------------------------
_LANDMARKER = None
_LANDMARKER_TRIED = False


def mediapipe_ready() -> bool:
    return _get_landmarker() is not None


def _get_landmarker():
    global _LANDMARKER, _LANDMARKER_TRIED
    if _LANDMARKER_TRIED:
        return _LANDMARKER
    _LANDMARKER_TRIED = True
    if not MODEL_PATH.exists():
        log.warning("Pose model not found at %s - using OpenCV fallback. Run setup to download it.", MODEL_PATH)
        return None
    try:
        import mediapipe as mp  # noqa: F401
        from mediapipe.tasks import python as mp_python
        from mediapipe.tasks.python import vision as mp_vision

        opts = mp_vision.PoseLandmarkerOptions(
            base_options=mp_python.BaseOptions(model_asset_path=str(MODEL_PATH)),
            running_mode=mp_vision.RunningMode.IMAGE,
            num_poses=1,
            output_segmentation_masks=True,
        )
        _LANDMARKER = mp_vision.PoseLandmarker.create_from_options(opts)
        log.info("MediaPipe pose landmarker loaded.")
    except Exception as e:  # pragma: no cover - depends on environment
        log.warning("Could not start MediaPipe (%s) - using OpenCV fallback.", e)
        _LANDMARKER = None
    return _LANDMARKER


def _mediapipe_detect(img_bgr: np.ndarray):
    """Returns (mask uint8 0/255, landmarks dict name->(x_px,y_px,vis)) or None."""
    lm = _get_landmarker()
    if lm is None:
        return None
    try:
        import mediapipe as mp

        rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
        res = lm.detect(mp.Image(image_format=mp.ImageFormat.SRGB, data=np.ascontiguousarray(rgb)))
        if not res.pose_landmarks or not res.segmentation_masks:
            return None
        h, w = img_bgr.shape[:2]
        mask = (res.segmentation_masks[0].numpy_view() > 0.5).astype(np.uint8) * 255
        pts = {}
        for name, idx in LM.items():
            p = res.pose_landmarks[0][idx]
            pts[name] = (p.x * w, p.y * h, float(getattr(p, "visibility", 1.0) or 0.0))
        return mask, pts
    except Exception as e:  # pragma: no cover
        log.warning("MediaPipe detection failed: %s", e)
        return None


# --------------------------------------------------------------------------
# classical segmentation fallback
# --------------------------------------------------------------------------
def _uniform_background_mask(img: np.ndarray) -> np.ndarray | None:
    """Works for plain walls / studio backgrounds: distance from the border colour."""
    h, w = img.shape[:2]
    b = max(4, int(min(h, w) * 0.03))
    border = np.concatenate([
        img[:b, :, :].reshape(-1, 3), img[-b:, :, :].reshape(-1, 3),
        img[:, :b, :].reshape(-1, 3), img[:, -b:, :].reshape(-1, 3)]).astype(np.float32)
    med = np.median(border, axis=0)
    spread = np.median(np.linalg.norm(border - med, axis=1))
    if spread > 14:  # background is not uniform enough
        return None
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB).astype(np.float32)
    med_lab = cv2.cvtColor(np.uint8([[med]]), cv2.COLOR_BGR2LAB)[0, 0].astype(np.float32)
    dist = np.linalg.norm(lab - med_lab, axis=2)
    dist = cv2.GaussianBlur(dist, (5, 5), 0)
    thr = max(18.0, spread * 3 + 10)
    mask = (dist > thr).astype(np.uint8) * 255
    return mask


def _grabcut_mask(img: np.ndarray) -> np.ndarray:
    h, w = img.shape[:2]
    rect = (int(w * 0.12), int(h * 0.03), int(w * 0.76), int(h * 0.94))
    mask = np.zeros((h, w), np.uint8)
    bgd, fgd = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
    small = max(1.0, max(h, w) / 640.0)
    if small > 1:
        sm = cv2.resize(img, (int(w / small), int(h / small)))
        r = tuple(int(v / small) for v in rect)
        m = np.zeros(sm.shape[:2], np.uint8)
        cv2.grabCut(sm, m, r, bgd, fgd, 4, cv2.GC_INIT_WITH_RECT)
        m = np.where((m == cv2.GC_FGD) | (m == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)
        return cv2.resize(m, (w, h), interpolation=cv2.INTER_NEAREST)
    cv2.grabCut(img, mask, rect, bgd, fgd, 4, cv2.GC_INIT_WITH_RECT)
    return np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)


def _clean_mask(mask: np.ndarray) -> np.ndarray:
    k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, k)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 9)))
    n, lab, stats, _ = cv2.connectedComponentsWithStats((mask > 0).astype(np.uint8), connectivity=8)
    if n <= 1:
        return np.zeros_like(mask)
    # largest component that is reasonably central
    h, w = mask.shape
    best, best_score = None, -1.0
    for i in range(1, n):
        x, y, bw, bh, area = stats[i]
        cx = x + bw / 2
        score = area * (1.0 - 0.6 * abs(cx - w / 2) / (w / 2))
        if score > best_score:
            best, best_score = i, score
    return ((lab == best).astype(np.uint8)) * 255


# --------------------------------------------------------------------------
# geometry helpers
# --------------------------------------------------------------------------
def _decode(data: bytes) -> np.ndarray:
    arr = np.frombuffer(data, np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img is None:
        raise ScanError("Could not read one of the images. Please upload a JPG or PNG photo.")
    h, w = img.shape[:2]
    s = MAX_SIDE / max(h, w)
    if s < 1:
        img = cv2.resize(img, (int(w * s), int(h * s)), interpolation=cv2.INTER_AREA)
    return img


def _ellipse_perimeter(width_cm: float, depth_cm: float) -> float:
    a, b = width_cm / 2.0, depth_cm / 2.0
    return math.pi * (3 * (a + b) - math.sqrt((3 * a + b) * (a + 3 * b)))


def _row_run(mask: np.ndarray, y: int, cx: float) -> tuple[int, int] | None:
    """Left/right ends of the foreground run on row y that contains (or is nearest to) cx."""
    row = mask[y] > 0
    if not row.any():
        return None
    xs = np.flatnonzero(row)
    # split into runs
    splits = np.flatnonzero(np.diff(xs) > 1)
    starts = np.r_[xs[0], xs[splits + 1]]
    ends = np.r_[xs[splits], xs[-1]]
    best, best_d = None, 1e9
    for s, e in zip(starts, ends):
        if s <= cx <= e:
            return int(s), int(e)
        d = min(abs(cx - s), abs(cx - e))
        if d < best_d:
            best, best_d = (int(s), int(e)), d
    return best


@dataclass
class View:
    img: np.ndarray
    mask: np.ndarray
    lms: dict | None
    backend: str
    top: int = 0
    bottom: int = 0
    cx: float = 0.0
    px_per_cm: float = 1.0
    warnings: list = field(default_factory=list)


def _prepare_view(data: bytes, height_cm: float, label: str) -> View:
    img = _decode(data)
    h, w = img.shape[:2]
    backend, lms, mask = "opencv-fallback", None, None
    mp_res = _mediapipe_detect(img)
    if mp_res is not None:
        mask, lms = mp_res
        backend = "mediapipe"
    if mask is None:
        mask = _uniform_background_mask(img)
        if mask is None:
            mask = _grabcut_mask(img)
    mask = _clean_mask(mask)
    ys = np.flatnonzero(mask.any(axis=1))
    if len(ys) < 50:
        raise ScanError(f"We could not find a person in the {label} photo. Use a plain background and good light.")
    view = View(img=img, mask=mask, lms=lms, backend=backend)
    view.top, view.bottom = int(ys[0]), int(ys[-1])
    span = view.bottom - view.top
    if span < 0.5 * h:
        view.warnings.append(f"{label.capitalize()} photo: stand further back so your whole body fills most of the frame.")
    if view.top <= 2:
        view.warnings.append(f"{label.capitalize()} photo: the top of your head looks cut off.")
    if view.bottom >= h - 3:
        view.warnings.append(f"{label.capitalize()} photo: your feet look cut off.")
    view.px_per_cm = span / height_cm
    # body centre line from the torso region
    t0, t1 = view.top + int(0.25 * span), view.top + int(0.5 * span)
    xs = np.flatnonzero(mask[t0:t1].any(axis=0))
    view.cx = float(np.median(xs)) if len(xs) else w / 2.0
    return view


def _t_to_y(view: View, t: float) -> int:
    return int(round(view.top + t * (view.bottom - view.top)))


def _front_levels(view: View) -> tuple[float, float]:
    """Shoulder & hip-joint heights as fractions of body height (top=0, feet=1)."""
    span = view.bottom - view.top
    if view.lms:
        l = view.lms
        try:
            if min(l["l_sh"][2], l["r_sh"][2], l["l_hip"][2], l["r_hip"][2]) > 0.4:
                sh = (l["l_sh"][1] + l["r_sh"][1]) / 2
                hp = (l["l_hip"][1] + l["r_hip"][1]) / 2
                t_sh, t_hp = (sh - view.top) / span, (hp - view.top) / span
                if 0.08 < t_sh < 0.30 and 0.35 < t_hp < 0.60 and t_hp - t_sh > 0.15:
                    return float(t_sh), float(t_hp)
        except Exception:
            pass
    return 0.185, 0.47  # population-average proportions


def _width_profile(view: View, t_lo: float, t_hi: float, steps: int = 40):
    out = []
    for t in np.linspace(t_lo, t_hi, steps):
        y = min(max(_t_to_y(view, float(t)), 0), view.mask.shape[0] - 1)
        run = _row_run(view.mask, y, view.cx)
        if run is None:
            continue
        out.append((float(t), y, (run[1] - run[0] + 1) / view.px_per_cm, run))
    return out


def _smooth_pick(profile, mode: str):
    """Pick max or min width after light smoothing so single noisy rows don't win."""
    if len(profile) < 5:
        return None
    ws = np.array([p[2] for p in profile])
    k = np.ones(5) / 5
    sm = np.convolve(np.pad(ws, 2, mode="edge"), k, mode="valid")
    i = int(np.argmax(sm) if mode == "max" else np.argmin(sm))
    return profile[i], float(sm[i])


def measure(front_bytes: bytes, side_bytes: bytes, height_cm: float, gender: str = "F") -> dict:
    if not (90 <= height_cm <= 230):
        raise ScanError("Please enter a height between 90 and 230 cm.")
    front = _prepare_view(front_bytes, height_cm, "front")
    side = _prepare_view(side_bytes, height_cm, "side")
    warnings = front.warnings + side.warnings

    t_sh, t_hp = _front_levels(front)
    T = t_hp - t_sh
    windows = {
        "bust": (t_sh + 0.08 * T, t_sh + 0.40 * T, "max"),
        "waist": (t_sh + 0.50 * T, t_sh + 0.88 * T, "min"),
        "hip": (t_hp - 0.05 * T, t_hp + 0.30 * T, "max"),
    }

    cal = load_calibration()
    result, levels = {}, {}
    for dim, (lo, hi, mode) in windows.items():
        pf = _smooth_pick(_width_profile(front, lo, hi), mode)
        ps = _smooth_pick(_width_profile(side, lo, hi), mode)
        if pf is None or ps is None:
            raise ScanError("We could not measure your torso. Make sure your full body is visible in both photos.")
        (tf, yf, wf, runf), _ = pf
        (ts, ys, ds, runs), _ = ps
        circ_cm = _ellipse_perimeter(wf, ds)
        c = cal[dim]
        circ_cal = circ_cm * c["scale"] + c["offset_cm"]
        result[dim] = {
            "width_cm": round(wf, 1), "depth_cm": round(ds, 1),
            "raw_cm": round(circ_cm, 1), "cm": round(circ_cal, 1), "inches": round(circ_cal / 2.54, 2),
        }
        levels[dim] = {"front": (yf, runf), "side": (ys, runs)}

        # sanity: depth/width ratio
        ratio = ds / max(wf, 1e-6)
        if ratio < 0.50:
            if not any("arms" in w for w in warnings):
                warnings.append("Your arms may be touching your body in the front photo, which inflates the measured width. "
                                "Stand with arms about 30 degrees away from your sides (A-pose) and retake.")
        elif not (0.40 <= ratio <= 1.05):
            warnings.append(f"The {dim} depth/width ratio looks unusual ({ratio:.2f}). Check that the front and side photos are not swapped.")

    # arms merged with the torso make the chest look wider than the hips
    if result["bust"]["width_cm"] > 1.35 * result["hip"]["width_cm"] and not any("arms" in w for w in warnings):
        warnings.append("The chest looks much wider than the hips - your arms may be touching your body. "
                        "Use an A-pose (arms slightly away from your sides).")

    # confidence
    backend = "mediapipe" if (front.backend == "mediapipe" and side.backend == "mediapipe") else "opencv-fallback"
    sigma = BASE_SIGMA_IN * (1.0 if backend == "mediapipe" else FALLBACK_SIGMA_FACTOR)
    sigma *= min(1.0 + 0.25 * len(warnings), 2.0)
    sigma = round(sigma, 2)
    quality = "good" if not warnings else ("fair" if len(warnings) <= 2 else "poor")

    overlay = _overlay(front, side, levels, result)
    return {
        "measurements": result,
        "sigma_in": {"bust": sigma, "waist": sigma, "hip": sigma},
        "quality": quality,
        "warnings": warnings,
        "backend": backend,
        "height_cm": height_cm,
        "overlay_jpeg_b64": overlay,
        "method": "2-photo silhouette estimate (ellipse model)",
        "gender": gender,
    }


def _overlay(front: View, side: View, levels: dict, result: dict) -> str:
    colors = {"bust": (80, 80, 230), "waist": (60, 170, 60), "hip": (230, 140, 40)}
    panels = []
    for name, v in (("front", front), ("side", side)):
        img = v.img.copy()
        tint = np.zeros_like(img)
        tint[:] = (200, 140, 40)
        m = v.mask > 0
        img[m] = (0.7 * img[m] + 0.3 * tint[m]).astype(np.uint8)
        for dim, lv in levels.items():
            y, (x0, x1) = lv[name]
            cv2.line(img, (x0, y), (x1, y), colors[dim], 3)
            cv2.putText(img, f"{dim} {result[dim]['width_cm' if name == 'front' else 'depth_cm']}cm",
                        (min(x1 + 6, img.shape[1] - 150), y - 4), cv2.FONT_HERSHEY_SIMPLEX, 0.55, colors[dim], 2)
        h = 520
        s = h / img.shape[0]
        panels.append(cv2.resize(img, (int(img.shape[1] * s), h)))
    canvas = np.hstack(panels)
    ok, buf = cv2.imencode(".jpg", canvas, [cv2.IMWRITE_JPEG_QUALITY, 80])
    return base64.b64encode(buf.tobytes()).decode("ascii") if ok else ""
