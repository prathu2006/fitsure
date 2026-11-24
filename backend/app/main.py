"""FitScan API  (FastAPI).  Serves the React app from /frontend/dist when built."""
from __future__ import annotations

import logging
import os
import time
from collections import defaultdict, deque
from pathlib import Path
from typing import Literal

from fastapi import Depends, FastAPI, File, Form, Header, HTTPException, Request, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse, PlainTextResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from . import accounts, charts, db, engine, pastechart, storecharts, vision
from .sample_people import people as sample_people

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("fitscan")

BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIST = Path(os.environ.get("FITSCAN_FRONTEND", BASE_DIR.parent / "frontend" / "dist"))
STATIC_DIR = BASE_DIR / "static"
MAX_UPLOAD = 12 * 1024 * 1024
VERSION = "0.1.0"

app = FastAPI(title="FitScan API", version=VERSION)
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ.get("FITSCAN_CORS", "*").split(","),
    allow_methods=["*"], allow_headers=["*"],
)

DEMO_STORE_KEY = "demo_boutique_key"
app.include_router(accounts.router)


# --------------------------------------------------------------------------
# startup: demo store so the integration demo works out of the box
# --------------------------------------------------------------------------
@app.on_event("startup")  # noqa
def _seed():
    if db.store_by_key(DEMO_STORE_KEY):
        return
    s = db.create_store("Demo Boutique", api_key=DEMO_STORE_KEY)
    # the demo boutique "provides" its own charts: copy a few built-in ones
    for brand, g, cat in [("fabindia", "F", "tops"), ("fabindia", "F", "jeans"), ("fabindia", "F", "kurta"),
                          ("fabindia", "M", "tshirt"), ("fabindia", "M", "shirt"), ("fabindia", "M", "jeans")]:
        ch = charts.get_chart(brand, g, cat)
        if not ch:
            continue
        own = {**ch, "id": f"store:{g}:{cat}", "brand": "store", "quirk_shift": 0.0, "source": "Seller upload",
               "notes": ["Demo Boutique's own size chart."]}
        db.upsert_store_chart(s["id"], g, cat, ch["title"], own)
    log.info("Seeded demo store (key %s)", DEMO_STORE_KEY)


# --------------------------------------------------------------------------
# helpers
# --------------------------------------------------------------------------
_hits: dict[str, deque] = defaultdict(deque)


def rate_limit(request: Request):
    ip = request.client.host if request.client else "?"
    now = time.time()
    q = _hits[ip]
    while q and now - q[0] > 60:
        q.popleft()
    if len(q) >= int(os.environ.get("FITSCAN_SCANS_PER_MIN", "30")):
        raise HTTPException(429, "Too many scans. Please wait a minute and try again.")
    q.append(now)


def plan_of(x_plan: str | None = Header(default="free")) -> str:
    return "pro" if (x_plan or "").lower() == "pro" else "free"


def need_store(x_store_key: str | None = Header(default=None)) -> dict:
    s = db.store_by_key(x_store_key)
    if not s:
        raise HTTPException(401, "Unknown or missing store key (X-Store-Key header).")
    return s


class PrefsIn(BaseModel):
    fit_pref: Literal["snug", "regular", "relaxed"] = "regular"
    slim_fit: bool = False
    cotton_shrink: bool = False


class RecommendIn(BaseModel):
    gender: Literal["F", "M"]
    measures: dict[str, float]  # inches
    sigma: dict[str, float] = Field(default_factory=dict)
    source: Literal["scan", "tape", "edited"] = "tape"
    brand: str = "general"
    category: str | None = None
    prefs: PrefsIn = PrefsIn()


def _sigmas(body: RecommendIn) -> tuple[dict, float]:
    default = {"tape": 0.4, "edited": 0.6, "scan": 1.6}[body.source]
    sg = {k: body.sigma.get(k, default) for k in body.measures}
    return sg, default


def _validate_measures(body: RecommendIn):
    for k, v in body.measures.items():
        if k not in engine.DIM_LABELS_ALL:
            raise HTTPException(422, f"Unknown measurement '{k}'.")
        if not (8 <= v <= 90):
            raise HTTPException(422, f"{k}: {v} in looks wrong (expected 8-90 inches).")


def _one(chart: dict, body: RecommendIn) -> dict:
    sg, default = _sigmas(body)
    prefs = engine.Prefs(**body.prefs.model_dump())
    r = engine.recommend(chart, body.measures, sg, prefs, default_sigma=default)
    r["category_label"] = engine.category_label(chart["gender"], chart["category"])
    r["gender"] = chart["gender"]
    r["sigma_used_in"] = {k: round(v, 2) for k, v in sg.items()}
    return r


# --------------------------------------------------------------------------
# public API
# --------------------------------------------------------------------------
@app.get("/api/health")
def health():
    return {"status": "ok", "version": VERSION, "vision_backend": "mediapipe" if vision.mediapipe_ready() else "opencv-fallback",
            "pose_model_present": vision.MODEL_PATH.exists()}


@app.get("/api/catalog")
def catalog():
    return charts.catalog()


@app.get("/api/chart/{brand}/{gender}/{category}")
def chart_view(brand: str, gender: str, category: str, plan: str = Depends(plan_of)):
    if brand != "general" and plan != "pro":
        raise HTTPException(402, "Brand size charts are part of the Pro plan.")
    c = charts.get_chart(brand, gender.upper(), category)
    if not c:
        raise HTTPException(404, "No such chart.")
    return charts.chart_public(c)


@app.post("/api/scan")
def scan(request: Request,
         front: UploadFile = File(...), side: UploadFile = File(...),
         height_cm: float = Form(...), gender: Literal["F", "M"] = Form("F"),
         _rl: None = Depends(rate_limit)):
    fb, sb = front.file.read(MAX_UPLOAD + 1), side.file.read(MAX_UPLOAD + 1)
    if len(fb) > MAX_UPLOAD or len(sb) > MAX_UPLOAD:
        raise HTTPException(413, "Each photo must be under 12 MB.")
    try:
        res = vision.measure(fb, sb, height_cm, gender)
    except vision.ScanError as e:
        raise HTTPException(422, str(e))
    finally:
        del fb, sb  # photos are never stored
    return JSONResponse(res, headers={"Cache-Control": "no-store"})


@app.post("/api/recommend")
def recommend(body: RecommendIn, plan: str = Depends(plan_of)):
    _validate_measures(body)
    if body.brand != "general" and plan != "pro":
        raise HTTPException(402, "Brand-specific sizes are part of the Pro plan. General sizes are free.")
    if body.brand != "general" and body.brand not in charts.BRAND_INFO:
        raise HTTPException(404, "Unknown brand.")
    cats = [body.category] if body.category else charts.categories_for(body.brand, body.gender)
    results = []
    for cat in cats:
        ch = charts.get_chart(body.brand, body.gender, cat)
        if ch is None:
            if body.category:
                raise HTTPException(404, f"{body.brand} has no {cat} chart for this gender.")
            continue
        if cat == "saree":
            continue
        results.append(_one(ch, body))
    out = {"brand": body.brand, "gender": body.gender, "results": results}
    if body.gender == "F" and not body.category:
        out["saree"] = charts.SAREE_ADVICE
    return out


class ConvertIn(BaseModel):
    gender: Literal["F", "M"]
    from_brand: str
    category: str
    size: str


def _mid(v) -> float:
    return (float(v[0]) + float(v[1])) / 2 if isinstance(v, (list, tuple)) else float(v)


@app.post("/api/convert")
def convert(body: ConvertIn, plan: str = Depends(plan_of)):
    """'I wear M in Zara' -> the size that matches the same body in every other brand."""
    if plan != "pro":
        raise HTTPException(402, "The size converter is part of the Pro plan.")
    if body.from_brand not in charts.BRAND_INFO:
        raise HTTPException(404, "Unknown brand.")
    src = charts.get_chart(body.from_brand, body.gender, body.category)
    if src is None:
        raise HTTPException(404, f"{body.from_brand} has no {body.category} chart for this gender.")
    want = body.size.strip().lower()
    row = next((r for r in src["rows"] if r["size"].lower() == want), None) \
        or next((r for r in src["rows"] if r["size"].split(" ")[0].lower() == want), None)
    if row is None:
        raise HTTPException(404, f"Size {body.size} is not in the {body.from_brand} chart.")
    # The body this size is made for = the middle of what the chart lists, with the brand's own
    # shift and ease undone (the engine adds shift and subtracts ease when going body -> size).
    shift, _ = engine.effective_shift(src, engine.Prefs())
    slack = src.get("slack", {})
    dshift = src.get("dim_shift", {})
    measures = {d: _mid(v) - shift + float(slack.get(d, 0.0)) - float(dshift.get(d, 0.0))
                for d, v in row["dims"].items() if d in engine.DIM_LABELS_ALL}
    out = []
    for key, info in charts.BRAND_INFO.items():
        if key == body.from_brand or body.gender not in info["genders"]:
            continue
        ch = charts.get_chart(key, body.gender, body.category)
        if ch is None:
            continue
        r = engine.recommend(ch, measures, {}, engine.Prefs(), default_sigma=0.5)
        rec = r.get("recommended")
        out.append({
            "brand": key, "name": info["name"], "status": r["status"],
            "size": rec["size"] if rec else None,
            "p_fit": rec["p_fit"] if rec else None,
            "alternative": rec["alternative"] if rec else None,
            "notes": r["reasons"][:2],
        })
    note = None
    if body.gender == "F" and body.from_brand in ("biba", "aurelia", "fabindia", "trends") and body.category in charts.SHARED_WOMEN:
        note = ("Biba, Aurelia, Fabindia and Trends publish the same body chart for this clothing type, "
                "so they match. Zara is the one that differs. Kurtas are where the four differ.")
    elif body.gender == "M" and body.from_brand in ("fabindia", "trends"):
        note = "Fabindia and Trends use the same men's body chart, so they match. Zara is the one that differs."
    return {
        "note": note,
        "from": {"brand": body.from_brand, "name": charts.BRAND_INFO[body.from_brand]["name"],
                 "category": body.category, "size": row["size"]},
        "measures_in": {k: round(v, 1) for k, v in measures.items()},
        "to": out,
    }


class PasteIn(RecommendIn):
    text: str
    category: str = "tops"
    unit: Literal["auto", "in", "cm"] = "auto"
    measure: Literal["auto", "body", "garment"] = "auto"


@app.post("/api/paste-chart")
def paste_chart(body: PasteIn, request: Request, plan: str = Depends(plan_of), _rl: None = Depends(rate_limit)):
    """Customer pastes any shop's size table; we read it and say which size fits, with odds. Nothing is stored."""
    if plan != "pro":
        raise HTTPException(402, "Paste-a-size-chart is part of the Pro plan.")
    _validate_measures(body)
    if body.category not in pastechart.EASE:
        raise HTTPException(422, "Unknown clothing type.")
    try:
        parsed = pastechart.parse(body.text, body.gender, body.category, body.unit, body.measure)
    except pastechart.PasteError as e:
        raise HTTPException(422, str(e))
    chart = parsed["chart"]
    needed = [d for d in chart["dims"]]
    missing = [d for d in needed if d not in body.measures]
    if missing:
        names = ", ".join(engine.DIM_LABELS_ALL.get(d, d) for d in missing)
        raise HTTPException(422, f"This chart needs your {names} measurement, which is missing from your scan.")
    result = _one(chart, body)
    return {"result": result, "assumptions": parsed["assumptions"], "warnings": parsed["warnings"], "table": parsed["table"]}


# --------------------------------------------------------------------------
# stores (seller side) + embed (customer side, used by the widget)
# --------------------------------------------------------------------------
class StoreIn(BaseModel):
    name: str = Field(min_length=2, max_length=80)


@app.post("/api/stores")
def create_store(body: StoreIn):
    return db.create_store(body.name.strip())


@app.get("/api/stores/me")
def store_me(store: dict = Depends(need_store)):
    return {"id": store["id"], "name": store["name"],
            "charts": [{k: c[k] for k in ("id", "gender", "category", "title")} | {
                "sizes": [r["size"] for r in c["chart"]["rows"]], "dims": c["chart"]["dims"] + c["chart"]["optional_dims"]}
                for c in db.store_charts(store["id"])]}


@app.get("/api/stores/sample-csv", response_class=PlainTextResponse)
def sample_csv():
    return storecharts.SAMPLE_CSV


@app.post("/api/stores/charts")
def upload_charts(file: UploadFile = File(...), unit: Literal["in", "cm"] = Form("in"),
                  measure_type: Literal["body", "garment"] = Form("body"), ease_in: float = Form(2.0),
                  store: dict = Depends(need_store)):
    raw = file.file.read(2_000_000)
    try:
        text = raw.decode("utf-8-sig")
    except UnicodeDecodeError:
        raise HTTPException(422, "Please save the CSV as UTF-8.")
    try:
        parsed = storecharts.parse_csv(text, unit, measure_type, ease_in)
    except storecharts.ChartError as e:
        raise HTTPException(422, str(e))
    for p in parsed:
        db.upsert_store_chart(store["id"], p["gender"], p["category"], p["title"], p["chart"])
    return {"saved": [{"gender": p["gender"], "category": p["category"], "sizes": len(p["chart"]["rows"])} for p in parsed]}


@app.delete("/api/stores/charts/{chart_row_id}")
def delete_chart(chart_row_id: int, store: dict = Depends(need_store)):
    if not db.delete_store_chart(store["id"], chart_row_id):
        raise HTTPException(404, "Chart not found.")
    return {"deleted": chart_row_id}


@app.get("/api/embed/info")
def embed_info(x_store_key: str | None = Header(default=None), store_key: str | None = None):
    store = db.store_by_key(x_store_key or store_key)
    if not store:
        raise HTTPException(401, "Unknown store key.")
    cs = db.store_charts(store["id"])
    return {"store": store["name"],
            "charts": [{"gender": c["gender"], "category": c["category"], "title": c["title"],
                        "sizes": [r["size"] for r in c["chart"]["rows"]],
                        "required": c["chart"]["dims"],
                        "dims": c["chart"]["dims"] + c["chart"]["optional_dims"]} for c in cs]}


@app.post("/api/embed/recommend")
def embed_recommend(body: RecommendIn, x_store_key: str | None = Header(default=None), store_key: str | None = None):
    store = db.store_by_key(x_store_key or store_key)
    if not store:
        raise HTTPException(401, "Unknown store key.")
    if not body.category:
        raise HTTPException(422, "category is required.")
    _validate_measures(body)
    ch = db.store_chart(store["id"], body.gender, body.category)
    if not ch:
        raise HTTPException(404, "This store has no size chart for that category yet.")
    r = _one(ch, body)
    return {"store": store["name"], "result": r}


@app.post("/api/embed/scan")
def embed_scan(request: Request, front: UploadFile = File(...), side: UploadFile = File(...),
               height_cm: float = Form(...), gender: Literal["F", "M"] = Form("F"),
               x_store_key: str | None = Header(default=None), _rl: None = Depends(rate_limit)):
    if not db.store_by_key(x_store_key):
        raise HTTPException(401, "Unknown store key.")
    return scan(request, front, side, height_cm, gender, None)


# --------------------------------------------------------------------------
# feedback loop (calibration data)
# --------------------------------------------------------------------------
class FeedbackIn(BaseModel):
    chart_id: str
    size: str
    outcome: Literal["tight", "fit", "loose"]
    p_fit: float | None = None
    p_tight: float | None = None
    p_loose: float | None = None
    measures: dict[str, float] = Field(default_factory=dict)


@app.post("/api/feedback")
def feedback(body: FeedbackIn):
    db.add_feedback(body.chart_id, body.size, body.outcome, body.p_fit, body.p_tight, body.p_loose, body.measures)
    return {"ok": True}


@app.get("/api/feedback/summary")
def feedback_summary():
    rows = [r for r in db.all_feedback() if r["p_fit"] is not None]
    n = len(rows)
    if not n:
        return {"n": 0, "bins": [], "brier": None, "message": "No feedback yet."}
    bins = defaultdict(lambda: [0, 0, 0.0])  # count, fit_count, sum_p
    brier = 0.0
    for r in rows:
        b = min(int(r["p_fit"] * 5), 4)
        bins[b][0] += 1
        bins[b][1] += 1 if r["outcome"] == "fit" else 0
        bins[b][2] += r["p_fit"]
        brier += (r["p_fit"] - (1.0 if r["outcome"] == "fit" else 0.0)) ** 2
    out = [{"range": f"{b*20}-{b*20+20}%", "n": c, "predicted": round(sp / c, 3), "observed": round(f / c, 3)}
           for b, (c, f, sp) in sorted(bins.items())]
    return {"n": n, "bins": out, "brier": round(brier / n, 4)}


# --------------------------------------------------------------------------
# lab: sample people + scan-vs-tape validation
# --------------------------------------------------------------------------
@app.get("/api/lab/people")
def lab_people():
    return people_in()


def people_in():
    rows = []
    for p in sample_people():
        rows.append({**p, "bust_in": round(p["bust"] / 2.54, 1), "waist_in": round(p["waist"] / 2.54, 1),
                     "hip_in": round(p["hip"] / 2.54, 1)})
    return rows


class LabRunIn(BaseModel):
    brand: str = "general"
    fit_pref: Literal["snug", "regular", "relaxed"] = "regular"


@app.post("/api/lab/run")
def lab_run(body: LabRunIn):
    """Run the engine for all 20 reference people across every category of the chosen brand."""
    table = []
    for p in people_in():
        g = p["sex"]
        if body.brand != "general" and g not in charts.BRAND_INFO.get(body.brand, {}).get("genders", []):
            table.append({"person": p, "results": {}})
            continue
        req = RecommendIn(gender=g, measures={"bust": p["bust"] / 2.54, "waist": p["waist"] / 2.54, "hip": p["hip"] / 2.54},
                          source="tape", brand=body.brand, prefs=PrefsIn(fit_pref=body.fit_pref))
        res = {}
        for cat in charts.categories_for(body.brand, g):
            if cat == "saree":
                continue
            ch = charts.get_chart(body.brand, g, cat)
            r = _one(ch, req)
            rec = r.get("recommended")
            res[cat] = {"size": rec["size"] if rec else None, "p_fit": rec["p_fit"] if rec else None,
                        "status": r["status"], "label": r["category_label"]}
        table.append({"person": p, "results": res})
    return {"brand": body.brand, "rows": table}


class ValidationIn(BaseModel):
    label: str = ""
    raw_cm: dict[str, float]   # scan raw circumference (before calibration)
    tape_cm: dict[str, float]


@app.post("/api/lab/record")
def lab_record(body: ValidationIn):
    n = 0
    for d in ("bust", "waist", "hip"):
        if d in body.raw_cm and d in body.tape_cm:
            db.add_validation(body.label, d, body.raw_cm[d], body.tape_cm[d])
            n += 1
    return {"recorded": n}


def _accuracy():
    rows = db.all_validation()
    cal = vision.load_calibration()
    out = {}
    for d in ("bust", "waist", "hip"):
        rs = [r for r in rows if r["dim"] == d]
        n = len(rs)
        if not n:
            out[d] = {"n": 0}
            continue
        err = [r["scan_raw_cm"] * cal[d]["scale"] + cal[d]["offset_cm"] - r["tape_cm"] for r in rs]
        mae = sum(abs(e) for e in err) / n
        bias = sum(err) / n
        item = {"n": n, "mae_cm": round(mae, 2), "bias_cm": round(bias, 2),
                "mae_in": round(mae / 2.54, 2)}
        if n >= 8:
            xs = [r["scan_raw_cm"] for r in rs]
            ys = [r["tape_cm"] for r in rs]
            mx, my = sum(xs) / n, sum(ys) / n
            sxx = sum((x - mx) ** 2 for x in xs)
            if sxx > 1e-6:
                a = sum((x - mx) * (y - my) for x, y in zip(xs, ys)) / sxx
                b = my - a * mx
                a = min(max(a, 0.6), 1.5)
                item["suggested"] = {"scale": round(a, 4), "offset_cm": round(my - a * mx, 2)}
        out[d] = item
    return {"calibration_in_use": cal, "dims": out, "records": len(rows)}


@app.get("/api/lab/accuracy")
def lab_accuracy():
    return _accuracy()


@app.post("/api/lab/apply-calibration")
def lab_apply():
    acc = _accuracy()
    cal = vision.load_calibration()
    changed = []
    for d, item in acc["dims"].items():
        if "suggested" in item:
            cal[d] = item["suggested"]
            changed.append(d)
    if not changed:
        raise HTTPException(422, "Need at least 8 scan-vs-tape pairs per measurement before calibrating.")
    vision.save_calibration(cal)
    return {"applied": changed, "calibration": cal}


@app.delete("/api/lab/records")
def lab_clear():
    db.clear_validation()
    return {"cleared": True}


# --------------------------------------------------------------------------
# static: widget + built frontend (single-process deploy)
# --------------------------------------------------------------------------
@app.get("/widget.js")
def widget_js():
    return FileResponse(STATIC_DIR / "widget.js", media_type="application/javascript",
                        headers={"Cache-Control": "public, max-age=300"})


if FRONTEND_DIST.exists():
    app.mount("/assets", StaticFiles(directory=FRONTEND_DIST / "assets"), name="assets")

    @app.get("/{full_path:path}", include_in_schema=False)
    def spa(full_path: str):
        if full_path.startswith("api/"):
            raise HTTPException(404)
        f = (FRONTEND_DIST / full_path).resolve()
        if full_path and f.is_file() and FRONTEND_DIST in f.parents:
            return FileResponse(f)
        return FileResponse(FRONTEND_DIST / "index.html")
else:
    @app.get("/", include_in_schema=False)
    def root():
        return {"message": "FitScan API is running. Build the frontend (npm run build) or open /docs."}
