"""Parse seller size charts (CSV) into the same structure as the built-in charts."""
from __future__ import annotations

import csv
import io
import re

from .charts import CATEGORY_LABELS

SAMPLE_CSV = """gender,category,size,bust,waist,hip,shoulder,neck
F,tops,XS,32,,,,
F,tops,S,34,,,,
F,tops,M,36,,,,
F,tops,L,38,,,,
F,tops,XL,40,,,,
F,jeans,28,,28,36,,
F,jeans,30,,30,38,,
F,jeans,32,,32,40,,
F,jeans,34,,34,42,,
M,shirt,S,38,,,17,15
M,shirt,M,40,,,17.75,15.5
M,shirt,L,42,,,18.5,16
M,jeans,30,,30,38,,
M,jeans,32,,32,40,,
M,jeans,34,,34,42,,
"""

DIMS = ("bust", "waist", "hip", "shoulder", "neck")
NUM = re.compile(r"^\s*(\d+(?:\.\d+)?)\s*(?:[-–to]+\s*(\d+(?:\.\d+)?))?\s*$")


class ChartError(ValueError):
    pass


def _val(s: str):
    s = (s or "").strip()
    if not s:
        return None
    m = NUM.match(s)
    if not m:
        raise ChartError(f"Cannot read value '{s}'. Use a number like 34 or a range like 30-32.")
    lo = float(m.group(1))
    if m.group(2):
        hi = float(m.group(2))
        if hi < lo:
            raise ChartError(f"Range '{s}' is back to front.")
        return (lo, hi)
    return lo


def parse_csv(text: str, unit: str = "in", measure_type: str = "body", ease_in: float = 2.0) -> list[dict]:
    """Returns a list of {gender, category, title, chart} (one per gender+category)."""
    reader = csv.DictReader(io.StringIO(text.strip().replace("﻿", "")))
    if not reader.fieldnames:
        raise ChartError("The file is empty.")
    fields = [f.strip().lower() for f in reader.fieldnames]
    for req in ("gender", "category", "size"):
        if req not in fields:
            raise ChartError(f"Missing column '{req}'. Columns needed: gender, category, size + any of {', '.join(DIMS)}.")
    if not any(d in fields for d in DIMS):
        raise ChartError(f"Add at least one measurement column: {', '.join(DIMS)}.")
    factor = 1 / 2.54 if unit == "cm" else 1.0
    shift = -float(ease_in) if measure_type == "garment" else 0.0

    groups: dict[tuple, list] = {}
    for line_no, raw in enumerate(reader, start=2):
        row = {(k or "").strip().lower(): (v or "").strip() for k, v in raw.items()}
        if not any(row.values()):
            continue
        g = row.get("gender", "").upper()[:1]
        if g not in ("F", "M"):
            raise ChartError(f"Line {line_no}: gender must be F or M.")
        cat = re.sub(r"[^a-z0-9_]+", "_", row.get("category", "").lower()).strip("_")
        if not cat:
            raise ChartError(f"Line {line_no}: category is empty.")
        size = row.get("size", "")
        if not size:
            raise ChartError(f"Line {line_no}: size is empty.")
        dims = {}
        for d in DIMS:
            try:
                v = _val(row.get(d, ""))
            except ChartError as e:
                raise ChartError(f"Line {line_no}: {e}")
            if v is None:
                continue
            if isinstance(v, tuple):
                v = (round(v[0] * factor + shift, 2), round(v[1] * factor + shift, 2))
            else:
                v = round(v * factor + shift, 2)
            dims[d] = v
        if not dims:
            raise ChartError(f"Line {line_no}: no measurements for size {size}.")
        groups.setdefault((g, cat), []).append({"size": size, "dims": dims, "extra": {}})

    out = []
    for (g, cat), rows in groups.items():
        if len(rows) < 2:
            raise ChartError(f"{g}/{cat}: needs at least 2 sizes.")
        present = [d for d in DIMS if all(d in r["dims"] for r in rows)]
        primary = [d for d in ("bust", "waist", "hip") if d in present]
        optional = [d for d in ("shoulder", "neck") if d in present]
        if not primary and not optional:
            raise ChartError(f"{g}/{cat}: every size needs the same measurement columns filled in.")
        if not primary:
            primary, optional = optional, []
        # keep only dims present in all rows
        for r in rows:
            r["dims"] = {d: v for d, v in r["dims"].items() if d in primary + optional}
        # sizes must go small -> large
        def centre(r):
            v = r["dims"][primary[0]]
            return (v[0] + v[1]) / 2 if isinstance(v, tuple) else v
        rows.sort(key=centre)
        label = CATEGORY_LABELS.get(g, {}).get(cat, cat.replace("_", " ").title())
        out.append({
            "gender": g, "category": cat, "title": label,
            "chart": {
                "id": f"store:{g}:{cat}", "brand": "store", "gender": g, "category": cat, "title": label,
                "rows": rows, "dims": primary, "optional_dims": optional, "slack": {},
                "quirk_shift": 0.0, "size_up_between": False,
                "notes": [f"Seller's own size chart ({measure_type} measurements"
                          + (f", {ease_in:g} in ease removed" if measure_type == 'garment' else "") + ")."],
                "source": "Seller upload",
            },
        })
    return out
