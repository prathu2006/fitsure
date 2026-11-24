"""'Paste a size chart, get a verdict'.

The customer copies the size table from any shopping page and pastes it as plain text.  We read the table
(sizes down the side or across the top, inches or cm, ranges like 34-36, fractions, garment vs body
measurements), turn it into the same chart structure the built-in charts use, and run the normal fit engine.
Nothing is stored.
"""
from __future__ import annotations

import re
from statistics import median

from . import charts

MAX_CHARS = 8000
DIMS = ("bust", "waist", "hip", "shoulder", "neck")

# words that decide what a header cell means (checked in this order)
IGNORE_WORDS = ("length", "sleeve", "inseam", "outseam", "rise", "thigh", "knee", "leg ", "height", "weight", "arm",
                "cuff", "bicep", "armhole", "front", "back", "bottom opening", "hem", "ankle", "calf", "kg", "lbs", "cup", "band")
DIM_WORDS = {
    "bust": ("bust", "chest", "pit to pit", "pit-to-pit", "underarm", "across chest"),
    "waist": ("waist",),
    "hip": ("hips", "hip", "seat"),
    "shoulder": ("shoulder",),
    "neck": ("neck", "collar"),
}
SIZE_WORDS = ("size", "label", "standard", "alpha", "brand size", "tag")
ALIAS_WORDS = ("uk", "us", "eu", "au", "in ", "numeric", "india", "indian", "intl", "international")

# how much roomier than the body a garment is (inches of circumference), by clothing type
EASE = {
    "tops": {"bust": 3.5, "waist": 3.5, "hip": 3.0, "shoulder": 0.5},
    "tshirt": {"bust": 4.0, "waist": 4.0, "hip": 3.0, "shoulder": 0.5},
    "shirt": {"bust": 4.0, "waist": 4.0, "hip": 3.0, "shoulder": 0.5, "neck": 0.5},
    "kurta": {"bust": 3.0, "waist": 4.0, "hip": 4.0, "shoulder": 0.5},
    "blazer": {"bust": 4.0, "waist": 4.0, "hip": 3.0, "shoulder": 0.5},
    "blouse": {"bust": 2.0, "waist": 2.0, "hip": 2.0, "shoulder": 0.5},
    "jeans": {"waist": 1.0, "hip": 2.5},
    "other": {"bust": 3.0, "waist": 2.0, "hip": 2.5, "shoulder": 0.5},
}
GARMENT_HINT = re.compile(r"garment|product measure|finished measure|actual measure|laid flat|lay flat|\bflat\b|pit[\s-]*to[\s-]*pit|across", re.I)
FLAT_HINT = re.compile(r"laid flat|lay flat|\bflat\b|pit[\s-]*to[\s-]*pit|across", re.I)
BODY_HINT = re.compile(r"body measure|to fit|fits (?:bust|chest)|your body|body size", re.I)

FRAC = {"½": ".5", "¼": ".25", "¾": ".75", "⅓": ".33", "⅔": ".67"}
NUM = r"\d+(?:\.\d+)?"
SIZE_LIKE = re.compile(r"^(?:\d{0,1}x{0,3}[sml]|x{1,3}[sl]|xs|xxs|xl|xxl|xxxl|2xl|3xl|4xl|5xl|free[\s_]?size|one[\s_]?size|os|petite|\d{2}(?:\.\d)?|\d{1}|(?:uk|us|eu|au|in)[\s_]?\d{1,2})(?:[_\s]?\(.*\))?$", re.I)


class PasteError(ValueError):
    pass


# --------------------------------------------------------------------------- text -> grid
def _prep(text: str) -> str:
    t = text.replace("\r", "\n").replace(" ", " ").replace("″", '"').replace("”", '"').replace("“", '"')
    for k, v in FRAC.items():
        t = re.sub(rf"(\d)\s*{k}", rf"\1{v}", t)
        t = t.replace(k, v)
    t = re.sub(r"(\d+)\s+(\d)/(\d)\b", lambda m: str(int(m.group(1)) + int(m.group(2)) / int(m.group(3))), t)  # 34 1/2
    t = re.sub(rf"\(\s*{NUM}(?:\s*[-–to]+\s*{NUM})?\s*(?:cm|in|inch|inches|\")\s*\)", "", t, flags=re.I)  # "(34 in)" alternates
    t = re.sub(rf"({NUM})\s*(?:-|–|—|to)\s*({NUM})", r"\1-\2", t)  # ranges: 34 - 36 -> 34-36
    t = re.sub(r"\b(UK|US|EU|AU|IN)\s+(\d{1,2})\b", r"\1_\2", t, flags=re.I)  # keep "UK 10" together
    t = re.sub(r"\(([^)]*)\)", lambda m: "(" + m.group(1).replace(" ", "_") + ")", t)
    return t


def _split(line: str) -> list[str]:
    if "\t" in line:
        cells = line.split("\t")
    elif "|" in line:
        cells = line.strip().strip("|").split("|")
    elif ";" in line:
        cells = line.split(";")
    elif re.search(r"\s{2,}", line.strip()):
        cells = re.split(r"\s{2,}", line.strip())
    elif line.count(",") >= 2 and not re.search(r"\d,\d", line):
        cells = line.split(",")
    else:
        cells = line.split()
        merged: list[str] = []
        for c in cells:  # "(in)" / "cm" / "inches" belong to the cell before
            if merged and (c.startswith("(") or c.lower() in ("in", "cm", "inch", "inches", "cms", '"')):
                merged[-1] += "_" + c
            else:
                merged.append(c)
        cells = merged
    return [re.sub(r"\s+", " ", c.replace("_", " ")).strip() for c in cells]


def _grid(text: str) -> list[list[str]]:
    rows = []
    for ln in _prep(text).split("\n"):
        if not ln.strip() or re.fullmatch(r"[\s|:\-+=_]*", ln):
            continue
        cells = [c for c in _split(ln) if not re.fullmatch(r"[.·•*_~]+", c)]  # stray dots / bullets from page layout
        if any(cells):
            rows.append(cells)
    return rows


# --------------------------------------------------------------------------- cell classification
def classify(cell: str) -> str | None:
    """-> 'size' | 'alias' | dim name | 'ignore' | None (not a header word)"""
    c = " " + re.sub(r"\(.*?\)|[^a-z ]", " ", cell.lower()) + " "
    c = re.sub(r"\s+", " ", c)
    if not c.strip():
        return None
    if any(w in c for w in IGNORE_WORDS):
        return "ignore"
    for dim, words in DIM_WORDS.items():
        if any(w in c for w in words):
            return dim
    if any(f" {w.strip()} " in c for w in ALIAS_WORDS if w.strip() not in ("in",)):
        return "alias"
    if any(w in c for w in SIZE_WORDS):
        return "size"
    return None


def _num(cell: str):
    """'34' | '34.5' | '34-36' | '86cm' | '34"' -> float or (lo, hi); else None"""
    s = cell.strip().lower().rstrip(".,;:").replace('"', "").rstrip(".,;:")
    s = s.replace('"', "").replace("inches", "").replace("inch", "").replace("cms", "").replace("cm", "")
    s = re.sub(r"\s*\bin\b", "", s).strip()
    m = re.fullmatch(rf"({NUM})(?:-({NUM}))?", s)
    if not m:
        return None
    lo = float(m.group(1))
    if m.group(2):
        hi = float(m.group(2))
        if hi < lo:
            lo, hi = hi, lo
        return (lo, hi)
    return lo


def _transpose(g: list[list[str]]) -> list[list[str]]:
    w = max(len(r) for r in g)
    padded = [r + [""] * (w - len(r)) for r in g]
    return [list(col) for col in zip(*padded)]


def _orientation(g: list[list[str]]) -> bool:
    """True when the table has sizes across the top and measurements down the first column."""
    col_hits = sum(1 for r in g if r and classify(r[0]) in DIMS)
    row_hits = max((sum(1 for c in r[1:] if classify(c) in DIMS) for r in g), default=0)
    return col_hits >= 1 and col_hits > row_hits


# --------------------------------------------------------------------------- main parser
def parse(text: str, gender: str, category: str, unit: str = "auto", measure: str = "auto") -> dict:
    text = (text or "").strip()
    if len(text) < 10:
        raise PasteError("Paste the size chart from the product page first.")
    if len(text) > MAX_CHARS:
        raise PasteError("That is a lot of text. Paste just the size table (a few lines).")
    grid = _grid(text)
    if len(grid) < 3:
        raise PasteError("I could only find a line or two. Copy the whole size table, including its header row.")
    transposed = _orientation(grid)
    if transposed:
        grid = _transpose(grid)

    # header row = the row with the most recognisable measurement words
    best, hdr = 0, None
    for i, r in enumerate(grid):
        score = sum(1 for c in r if classify(c) in DIMS)
        if score > best:
            best, hdr = score, i
    if hdr is None:
        raise PasteError("I couldn't find measurement names such as Bust, Waist or Hip in your paste. "
                         "Copy the table together with its header row.")
    header = grid[hdr]
    colmap: dict[int, str] = {}
    ignored: list[str] = []
    size_col = None
    for j, c in enumerate(header):
        k = classify(c)
        if k in DIMS:
            if k not in colmap.values():  # first column per measurement wins
                colmap[j] = k
        elif k == "ignore":
            ignored.append(re.sub(r"\(.*?\)", "", c).strip())
        elif k == "size" and size_col is None:
            size_col = j
        elif k == "alias":
            colmap[j] = "alias"
    if size_col is None:
        size_col = next((j for j in range(len(header)) if j not in colmap), 0)
    dim_cols = {j: d for j, d in colmap.items() if d in DIMS}
    if not dim_cols:
        raise PasteError("No Bust, Waist, Hip, Shoulder or Neck column found.")

    body_rows = [r for r in grid[hdr + 1:] if len(r) > 1]
    if body_rows and sum(1 for r in body_rows if len(r) != len(header)) > len(body_rows) / 2:
        warn_align = True
    else:
        warn_align = False

    # data rows
    raw: list[dict] = []
    seen: set[str] = set()
    warnings: list[str] = []
    for r in grid[hdr + 1:]:
        if size_col >= len(r):
            continue
        label = r[size_col].strip()
        if not label:
            continue
        vals = {}
        for j, d in dim_cols.items():
            if j < len(r):
                v = _num(r[j])
                if v is not None:
                    vals[d] = v
        if not vals:
            continue
        if not SIZE_LIKE.match(label.replace(" ", "_")) and not re.match(r"^[A-Za-z0-9]{1,6}", label):
            continue
        extra = [r[j] for j, d in colmap.items() if d == "alias" and j < len(r) and r[j].strip()]
        key = label.lower()
        if key in seen:
            warnings.append("The chart seems to appear twice (for example inches and cm). I used the first table only.")
            break
        seen.add(key)
        if extra:
            label = f"{label} ({', '.join(extra)})"
        raw.append({"size": label, "dims": vals})
    if warn_align:
        raise PasteError("The columns in your paste don't line up with the header row, so I can't tell which number is "
                         "Bust, Waist or Hip. Try copying the table again, or retype it with one line per size.")
    if len(raw) < 2:
        raise PasteError("I need at least two sizes with measurements. Check that the sizes are in the first column or row.")

    # ---- unit ----
    low = text.lower()
    has_cm = bool(re.search(r"\bcm\b|centi|\d\s*cm", low))
    has_in = bool(re.search(r"\binch|\binches|\d\s*in\b|\(in\)|\bin\)|\"", low))
    allvals = [(v[0] + v[1]) / 2 if isinstance(v, tuple) else v for r in raw for v in r["dims"].values()]
    guessed = "cm" if (median(allvals) >= 50) else "in"
    if unit in ("in", "cm"):
        used_unit, unit_how = unit, "you chose it"
    elif has_cm and not has_in:
        used_unit, unit_how = "cm", "the chart says cm"
    elif has_in and not has_cm:
        used_unit, unit_how = "in", "the chart says inches"
    else:
        used_unit, unit_how = guessed, "judged from the numbers"
    f = 1 / 2.54 if used_unit == "cm" else 1.0

    def conv(v, mult=1.0, shift=0.0):
        if isinstance(v, tuple):
            return (round(v[0] * f * mult + shift, 2), round(v[1] * f * mult + shift, 2))
        return round(v * f * mult + shift, 2)

    # ---- body vs garment, flat vs round ----
    flat = bool(FLAT_HINT.search(text))
    if measure == "garment":
        garment = True
    elif measure == "body":
        garment = False
    else:
        garment = bool(GARMENT_HINT.search(text)) and not BODY_HINT.search(text)
    measure_how = "you chose it" if measure in ("garment", "body") else (
        "the chart mentions garment/flat measurements" if garment else "no sign of garment measurements, so treated as body measurements")

    bust_vals = [(v[0] + v[1]) / 2 if isinstance(v, tuple) else v for r in raw for k, v in r["dims"].items() if k == "bust"]
    half = False
    if (flat or garment) and bust_vals and median(bust_vals) * f < 27 and category in ("tops", "tshirt", "shirt", "kurta", "blazer", "blouse", "other"):
        half = True  # flat width measured edge to edge: the circumference is twice that
    ease = EASE.get(category, EASE["other"]) if garment else {}

    rows = []
    for r in raw:
        dims = {}
        for d, v in r["dims"].items():
            mult = 2.0 if (half and d in ("bust", "waist", "hip")) else 1.0
            dims[d] = conv(v, mult, -float(ease.get(d, 0.0)))
        rows.append({"size": r["size"], "dims": dims, "extra": {}})

    present = [d for d in DIMS if all(d in r["dims"] for r in rows)]
    if not present:
        raise PasteError("Every size needs the same measurement columns filled in.")
    for r in rows:
        r["dims"] = {d: v for d, v in r["dims"].items() if d in present}

    # choose primary / optional dims the way the built-in charts do
    slack: dict[str, float] = {}
    if category == "jeans":
        primary = [d for d in ("waist", "hip") if d in present] or present[:1]
        optional = []
    elif category == "kurta":
        primary = ["bust"] if "bust" in present else present[:1]
        optional = [d for d in ("waist", "hip", "shoulder") if d in present and d not in primary]
        slack = {"hip": 4.5, "waist": 5.0 if gender == "F" else 4.0}
    elif category == "other":
        primary = [d for d in ("bust", "waist", "hip") if d in present] or present[:1]
        optional = [d for d in ("shoulder", "neck") if d in present and d not in primary]
    else:
        primary = ["bust"] if "bust" in present else ([d for d in ("waist", "hip") if d in present] or present[:1])
        optional = [d for d in ("neck", "shoulder") if d in present and d not in primary]

    def centre(row):
        v = row["dims"][primary[0]]
        return (v[0] + v[1]) / 2 if isinstance(v, tuple) else v
    rows.sort(key=centre)
    cs = [centre(r) for r in rows]
    if any(b - a < 0.05 for a, b in zip(cs, cs[1:])):
        warnings.append(f"Some sizes have the same {primary[0]} measurement, so the odds between them will be close.")

    # sanity: does it look like garment numbers although nothing said so?
    if not garment and category in charts.CATEGORY_LABELS.get(gender, {}) and "bust" in present:
        ref = charts.get_chart("general", gender, category) or charts.get_chart("general", gender, "tops")
        if ref:
            rb = [(v[0] + v[1]) / 2 if isinstance(v, tuple) else v for r in ref["rows"] for k, v in r["dims"].items() if k == "bust"]
            pb = [(r["dims"]["bust"][0] + r["dims"]["bust"][1]) / 2 if isinstance(r["dims"]["bust"], tuple) else r["dims"]["bust"] for r in rows]
            if rb and median(pb) > median(rb) + 3.0:
                warnings.append("These numbers look bigger than typical body measurements. If the page lists the garment's own "
                                "measurements, choose 'Garment measurements' below.")
    if ignored:
        warnings.append("Ignored columns that don't affect body fit: " + ", ".join(dict.fromkeys(ignored)) + ".")
    if half:
        warnings.append("Bust looked like a flat (edge to edge) width, so I doubled it to get the full circumference.")

    label = charts.CATEGORY_LABELS.get(gender, {}).get(category, "Pasted size chart")
    notes = [f"Read from the chart you pasted ({used_unit if used_unit == 'cm' else 'inches'}, "
             f"{'garment measurements with typical ease removed' if garment else 'body measurements'})."]
    chart = {
        "id": f"paste:{gender}:{category}", "brand": "paste", "gender": gender, "category": category, "title": label,
        "rows": rows, "dims": primary, "optional_dims": optional, "slack": slack, "quirk_shift": 0.0, "dim_shift": {},
        "size_up_between": False, "notes": notes, "source": "Pasted chart",
    }
    return {
        "chart": chart,
        "assumptions": {
            "unit": used_unit, "unit_how": unit_how,
            "measure": "garment" if garment else "body", "measure_how": measure_how,
            "layout": "sizes across the top" if transposed else "sizes down the side",
            "flat_doubled": half, "ease_removed": ease if garment else {},
        },
        "warnings": warnings,
        "table": [{"size": r["size"], "dims": r["dims"]} for r in rows],
    }
