"""
Calibrated size-probability engine.

Idea
----
A size chart gives, for every size k, a body measurement c_k per dimension d
(bust, waist, hip ...).  Size k "owns" the interval of body measurements
between the midpoints to its neighbours.  We treat the user's measurement as
a Gaussian  N(m_d, sigma_d)  (sigma comes from the scan quality, or is small
for a tape measurement), so for every dimension we get a probability
distribution over the *size that dimension requires*:

    P(req_d = k) = Phi((u_k - m)/sigma) - Phi((l_k - m)/sigma)

(+ two extra outcomes: "below the smallest size" and "above the largest").

A garment must satisfy every dimension at once, so the size actually needed is
the largest of the per-dimension requirements (a tailor's "binding
constraint").  With independent errors:

    P(max req <= k) = prod_d P(req_d <= k)

which gives, for every size k:
    P(fits)  = P(max = k)
    P(tight) = P(max > k)    (size k is too small)
    P(loose) = P(max < k)    (size k is too big)

These three always add up to 1, so the output is a proper probability
distribution rather than a single guess.  Personal fit preference, brand
quirks (e.g. Zara runs slim) and slack (flared kurtis) enter as shifts of the
effective measurement.
"""
from __future__ import annotations

import math
from dataclasses import dataclass

from .charts import CATEGORY_LABELS

FIT_PREF_SHIFT = {"snug": -0.5, "regular": 0.0, "relaxed": 1.0}  # inches
SLIM_FIT_SHIFT = 1.5  # slim cuts run about one size smaller
COTTON_SHRINK_SHIFT = 0.5  # ~1 inch shrinkage on the garment ~ half inch on body equivalent
MIN_SIGMA = 0.25

DIM_LABELS = {
    "F": {"bust": "Bust", "waist": "Waist", "hip": "Hip", "shoulder": "Shoulder", "neck": "Neck"},
    "M": {"bust": "Chest", "waist": "Waist", "hip": "Hip", "shoulder": "Shoulder", "neck": "Neck"},
}


def _phi(x: float) -> float:
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2.0)))


def _rng(v) -> tuple[float, float]:
    if isinstance(v, (tuple, list)):
        return float(v[0]), float(v[1])
    return float(v), float(v)


def dim_bins(rows: list[dict], dim: str) -> list[tuple[float, float]] | None:
    """Body-measurement interval owned by every size for one dimension."""
    vals = []
    for r in rows:
        v = r["dims"].get(dim)
        if v is None:
            return None
        vals.append(_rng(v))
    n = len(vals)
    if n == 0:
        return None
    if n == 1:
        lo, hi = vals[0]
        return [(lo - 1.0, hi + 1.0)]
    uppers = [(vals[i][1] + vals[i + 1][0]) / 2 for i in range(n - 1)]
    lowers = [0.0] * n
    for i in range(1, n):
        lowers[i] = uppers[i - 1]
    lowers[0] = vals[0][0] - (uppers[0] - vals[0][1])
    last_upper = vals[-1][1] + (vals[-1][0] - uppers[-1])
    uppers.append(last_upper)
    return list(zip(lowers, uppers))


def _req_distribution(bins, mu: float, sigma: float) -> list[float]:
    """P over [below-range, size0..size(n-1), above-range]."""
    n = len(bins)
    p = [0.0] * (n + 2)
    p[0] = _phi((bins[0][0] - mu) / sigma)
    for k, (lo, hi) in enumerate(bins):
        p[k + 1] = _phi((hi - mu) / sigma) - _phi((lo - mu) / sigma)
    p[n + 1] = 1.0 - _phi((bins[-1][1] - mu) / sigma)
    return p


@dataclass
class Prefs:
    fit_pref: str = "regular"
    slim_fit: bool = False
    cotton_shrink: bool = False


def effective_shift(chart: dict, prefs: Prefs) -> tuple[float, list[str]]:
    shift = FIT_PREF_SHIFT.get(prefs.fit_pref, 0.0)
    notes = []
    if shift:
        notes.append(f"{prefs.fit_pref.capitalize()} fit preference ({shift:+.1f} in)")
    q = float(chart.get("quirk_shift", 0.0))
    if q:
        notes.append(f"Brand runs small / size-up advice ({q:+.1f} in)")
    shift += q
    if prefs.slim_fit:
        shift += SLIM_FIT_SHIFT
        notes.append(f"Slim-fit cut ({SLIM_FIT_SHIFT:+.1f} in)")
    if prefs.cotton_shrink:
        shift += COTTON_SHRINK_SHIFT
        notes.append(f"Cotton may shrink ({COTTON_SHRINK_SHIFT:+.1f} in)")
    return shift, notes


def recommend(chart: dict, measures: dict[str, float], sigmas: dict[str, float] | None = None,
              prefs: Prefs | None = None, default_sigma: float = 0.5) -> dict:
    """measures / sigmas are in inches, keyed by bust|waist|hip|shoulder|neck."""
    prefs = prefs or Prefs()
    sigmas = sigmas or {}
    rows = chart["rows"]
    n = len(rows)
    shift, shift_notes = effective_shift(chart, prefs)

    used = []
    for d in chart["dims"]:
        if d in measures and measures[d] is not None:
            used.append(d)
    for d in chart.get("optional_dims", []):
        if d in measures and measures[d] is not None and d not in used:
            if dim_bins(rows, d) is not None:
                used.append(d)
    missing = [d for d in chart["dims"] if d not in used]
    if not used:
        return {"ok": False, "error": "missing_measurements", "missing": missing,
                "chart_id": chart["id"], "title": chart["title"]}

    # per-dimension "required size" distributions
    per_dim = {}
    for d in used:
        bins = dim_bins(rows, d)
        if bins is None:
            continue
        slack = float(chart.get("slack", {}).get(d, 0.0))
        mu = float(measures[d]) + shift - slack + float(chart.get("dim_shift", {}).get(d, 0.0))
        sg = max(float(sigmas.get(d, default_sigma)), MIN_SIGMA)
        per_dim[d] = {"dist": _req_distribution(bins, mu, sg), "mu": mu, "sigma": sg, "bins": bins}

    # cumulative of the max requirement (independence across dimensions)
    m = n + 2
    cum = [1.0] * m
    for info in per_dim.values():
        c, run = [], 0.0
        for x in info["dist"]:
            run += x
            c.append(min(run, 1.0))
        info["cum"] = c
        cum = [a * b for a, b in zip(cum, c)]
    pmax = [cum[0]] + [max(cum[i] - cum[i - 1], 0.0) for i in range(1, m)]

    p_below, p_above = pmax[0], pmax[n + 1]
    sizes = []
    for k in range(n):
        j = k + 1
        p_fit = pmax[j]
        p_loose = cum[j - 1]
        p_tight = 1.0 - cum[j]
        sizes.append({
            "size": rows[k]["size"],
            "p_fit": round(p_fit, 4),
            "p_tight": round(max(p_tight, 0.0), 4),
            "p_loose": round(max(p_loose, 0.0), 4),
            "extra": rows[k].get("extra", {}),
        })

    # pick a size
    status = "ok"
    best_i = max(range(n), key=lambda i: sizes[i]["p_fit"])
    chosen_i = best_i
    reasons = []
    if p_above >= 0.5:
        status = "above_range"
        chosen_i = None
    elif p_below >= 0.5:
        status = "below_range"
        chosen_i = None
    else:
        if chart.get("size_up_between") and best_i < n - 1:
            nxt = sizes[best_i + 1]["p_fit"]
            if nxt >= 0.8 * sizes[best_i]["p_fit"] and nxt > 0.05:
                chosen_i = best_i + 1
                reasons.append("Between two sizes: this brand/style advises sizing up.")

    # which dimension decides
    binding = None
    if len(per_dim) > 1:
        exp_req = {d: sum(i * x for i, x in enumerate(info["dist"])) for d, info in per_dim.items()}
        binding = max(exp_req, key=exp_req.get)
        spread = max(exp_req.values()) - min(exp_req.values())
        if spread < 0.35:
            binding = None

    result = {
        "ok": True,
        "chart_id": chart["id"],
        "brand": chart["brand"],
        "category": chart["category"],
        "title": chart["title"],
        "status": status,
        "sizes": sizes,
        "p_below_range": round(p_below, 4),
        "p_above_range": round(p_above, 4),
        "used_dims": used,
        "missing_dims": missing,
        "binding_dim": binding,
        "effective_shift_in": round(shift, 2),
        "shift_notes": shift_notes,
        "reasons": reasons,
        "notes": chart.get("notes", []),
        "source": chart.get("source"),
    }

    if chosen_i is not None:
        s = sizes[chosen_i]
        alt = None
        for cand in (chosen_i - 1, chosen_i + 1):
            if 0 <= cand < n and (alt is None or sizes[cand]["p_fit"] > sizes[alt]["p_fit"]):
                alt = cand
        result["recommended"] = {
            "size": s["size"],
            "p_fit": s["p_fit"],
            "p_tight": s["p_tight"],
            "p_loose": s["p_loose"],
            "return_risk": round(1.0 - s["p_fit"], 4),
            "alternative": (sizes[alt]["size"] if alt is not None and sizes[alt]["p_fit"] >= 0.1 else None),
            "alternative_p_fit": (sizes[alt]["p_fit"] if alt is not None and sizes[alt]["p_fit"] >= 0.1 else None),
        }
        if s["p_fit"] < 0.5:
            reasons.append("You sit between sizes. Check the garment's stretch, or take the larger size for comfort.")
        if s["p_tight"] > s["p_loose"] and s["p_tight"] > 0.25:
            reasons.append("There is a real chance this size is a little tight.")
        elif s["p_loose"] > s["p_tight"] and s["p_loose"] > 0.25:
            reasons.append("There is a real chance this size is a little loose.")
    else:
        edge = sizes[-1]["size"] if status == "above_range" else sizes[0]["size"]
        result["recommended"] = None
        result["edge_size"] = edge
        if status == "above_range":
            reasons.append(f"Your measurements are above the largest size in this chart ({edge}). "
                           "Look for a plus-size line.")
        else:
            reasons.append(f"Your measurements are below the smallest size in this chart ({edge}). "
                           "Look for a kids' or petite line.")
    if binding:
        reasons.append(f"Your {DIM_LABELS_ALL.get(binding, binding).lower()} decides the size here.")
    result["reasons"] = reasons
    return result


DIM_LABELS_ALL = {"bust": "Bust/Chest", "waist": "Waist", "hip": "Hip", "shoulder": "Shoulder", "neck": "Neck"}


def petticoat_size(waist_in: float) -> int:
    """Convenience helper (not used by the probability engine)."""
    return int(round(waist_in / 2.0) * 2)


def cm_to_in(x: float) -> float:
    return x / 2.54


def in_to_cm(x: float) -> float:
    return x * 2.54


def category_label(gender: str, category: str) -> str:
    return CATEGORY_LABELS.get(gender, {}).get(category, category)
