"""
Built-in size charts, transcribed from the team's "Brand Size Guide" PDF
(Biba, Aurelia, Fabindia, Zara, Trends).

All measurements are BODY measurements in inches unless a key starts with
"garment_". A value may be a number or a (low, high) range.

Internal measurement keys (the same for both genders):
    bust   - bust for women, chest for men
    waist
    hip
    shoulder (optional dimension)
    neck     (optional dimension)

NOTE: these are the approximate/generalised charts from the PDF, not official
brand charts. Sellers can upload their own official charts (CSV) in the
"Store" area and those override anything here.
"""
from __future__ import annotations

from copy import deepcopy
from typing import Any

CATEGORY_LABELS = {
    "F": {
        "tops": "Tops, shirts & dresses",
        "kurta": "Kurtis & kurtas",
        "jeans": "Jeans & formal trousers",
        "blazer": "Blazers (formal)",
        "blouse": "Saree blouse",
        "petticoat": "Petticoat",
        "saree": "Saree",
    },
    "M": {
        "tshirt": "T-shirts & polos",
        "shirt": "Formal shirts",
        "kurta": "Kurta & pyjama",
        "jeans": "Jeans, trousers & chinos",
        "blazer": "Blazers & Nehru jackets",
    },
}

BRAND_INFO = {
    "biba": {"name": "Biba", "genders": ["F"], "blurb": "Ethnic wear, women"},
    "aurelia": {"name": "Aurelia", "genders": ["F"], "blurb": "Ethnic wear, women"},
    "fabindia": {"name": "Fabindia", "genders": ["F", "M"], "blurb": "Ethnic & everyday, cotton"},
    "trends": {"name": "Trends", "genders": ["F", "M"], "blurb": "Reliance Trends (varies by sub-brand)"},
    "zara": {"name": "Zara", "genders": ["F", "M"], "blurb": "EU sizing, runs slim"},
}

BRAND_NOTES = {
    "biba": ["Biba is women-only. Sizes differ by product line, so always compare with the product-page chart."],
    "aurelia": ["Aurelia is women-only. Sizes differ by product line."],
    "fabindia": ["Fabindia cotton can shrink about 1 inch after washing (tick 'cotton may shrink' to account for it)."],
    "trends": ["Trends varies by sub-brand (Avaasa, Fig, Netplay). Slim-fit lines run about one size smaller (tick 'slim-fit cut')."],
    "zara": ["Zara runs slim, so most people size up one size. If between sizes, size up."],
}

# --------------------------------------------------------------------------
# helpers
# --------------------------------------------------------------------------


def _rows(sizes, **cols):
    """Build row dicts: _rows(['S','M'], bust=[34,36], waist=[(28,30), 31])"""
    n = len(sizes)
    for k, v in cols.items():
        assert len(v) == n, f"column {k} has {len(v)} values, expected {n}"
    rows = []
    for i, s in enumerate(sizes):
        dims, extra = {}, {}
        for k, v in cols.items():
            (dims if k in DIM_KEYS else extra)[k] = v[i]
        rows.append({"size": s, "dims": dims, "extra": extra})
    return rows


DIM_KEYS = {"bust", "waist", "hip", "shoulder", "neck"}

# per-dimension settings used by the engine
#   primary: always used in the fit calculation
#   optional: used only if the user supplies that measurement
#   slack: inches of extra allowance (garment is cut loose in that area)


def _chart(brand, gender, category, title, rows, dims, optional=(), slack=None,
           quirk_shift=0.0, size_up_between=False, notes=None, source="PDF size guide",
           dim_shift=None):
    return {
        "id": f"{brand}:{gender}:{category}",
        "brand": brand,
        "gender": gender,
        "category": category,
        "title": title,
        "rows": rows,
        "dims": list(dims),
        "optional_dims": list(optional),
        "slack": slack or {},
        "quirk_shift": quirk_shift,
        "dim_shift": dim_shift or {},   # per-dimension shift in inches, e.g. a roomier or snugger cut
        "size_up_between": size_up_between,
        "notes": notes or [],
        "source": source,
    }


# --------------------------------------------------------------------------
# WOMEN
# --------------------------------------------------------------------------
W6 = ["XS", "S", "M", "L", "XL", "XXL"]
W_BUST = [32, 34, 36, 38, 40, 42]


KURTA_REF_EASE = 3.0  # average of Biba 3, Aurelia 2, Fabindia 4, Trends 3 (inches)


def _women_kurta(brand, waist, hip, g_bust, length, extra_3xl=None):
    sizes = list(W6)
    bust = list(W_BUST)
    shoulder = [13.5, 14, 14.5, 15, 15.5, 16]
    if extra_3xl:
        sizes.append("3XL")
        bust.append(44)
        shoulder.append(16.5)
        waist = waist + [extra_3xl["waist"]]
        hip = hip + [extra_3xl["hip"]]
        g_bust = g_bust + [extra_3xl["g_bust"]]
    rows = _rows(sizes, bust=bust, waist=waist, hip=hip, shoulder=shoulder,
                 garment_bust=g_bust, length=[length] * len(sizes))
    # Room in the garment at the bust (finished garment bust minus body bust). The four Indian brands
    # average KURTA_REF_EASE; a brand with less room needs a bigger size, one with more room a smaller one.
    ease = g_bust[2] - bust[2]
    bust_shift = round(KURTA_REF_EASE - ease, 2)
    notes = ["Ethnic wear: if you are between sizes, size up."]
    if bust_shift > 0:
        notes.append(f"This brand's kurtas are cut about {ease:g} in roomier than your bust, less than average, so the bust runs a little snug.")
    elif bust_shift < 0:
        notes.append(f"This brand's kurtas are cut about {ease:g} in roomier than your bust, more than average, so the bust runs a little roomy.")
    return _chart(
        brand, "F", "kurta", "Kurtis & kurtas", rows,
        # A kurta hangs from the bust, so the bust decides. Waist (~4 in of ease) and hip (flare) only
        # matter if they are unusually large, so they carry big allowances.
        dims=["bust"], optional=["hip", "waist", "shoulder"],
        slack={"hip": 4.5, "waist": 5.0},
        quirk_shift=0.5, size_up_between=True, dim_shift={"bust": bust_shift} if bust_shift else None,
        notes=notes + ["Your bust decides the kurta size. Hip and waist are only a check, because kurtas flare and have easy room at the waist."],
    )


def _women_charts():
    charts = []

    # Kurtis / kurtas
    charts.append(_women_kurta("biba", [27, 29, 31, 33, 35, 37], [35, 37, 39, 41, 43, 45],
                               [35, 37, 39, 41, 43, 45], "42-46",
                               extra_3xl={"waist": 39, "hip": 47, "g_bust": 47}))
    charts.append(_women_kurta("aurelia", [27, 29, 31, 33, 35, 37], [35, 37, 39, 41, 43, 45],
                               [34, 36, 38, 40, 42, 44], "40-44"))
    charts.append(_women_kurta("fabindia", [26, 28, 30, 32, 34, 36], [34, 36, 38, 40, 42, 44],
                               [36, 38, 40, 42, 44, 46], "38-42"))
    charts.append(_women_kurta("trends", [26, 28, 30, 32, 34, 36], [34, 36, 38, 40, 42, 44],
                               [35, 37, 39, 41, 43, 45], "40-44"))

    # Tops, shirts, dresses (same for Biba, Aurelia, Fabindia, Trends)
    tops_rows = _rows(
        W6, bust=W_BUST,
        top_length=[22, 23, 24, 25, 26, 27],
        garment_bust=[35, 37, 39, 41, 43, 45],
        sleeve=[22.5, 22.9, 23.3, 23.7, 24.1, 24.5],
        shirt_length=[25.5, 26.3, 27, 27.8, 28.5, 29.3],
        dress_midi_length=[40, 40, 41, 41, 42, 42],
    )
    # Jeans & formal trousers (same for the four Indian brands)
    jeans_rows = _rows(
        W6, waist=[26, 28, 30, 32, 34, 36], hip=[34, 36, 38, 40, 42, 44],
        inseam=[30] * 6, approx_us=[2, 4, 8, 12, 14, 16],
    )
    # Blouse (for sarees)
    blouse_sizes = ["32", "34", "36", "38", "40", "42", "44"]
    blouse_rows = _rows(
        blouse_sizes, bust=[32, 34, 36, 38, 40, 42, 44], waist=[26, 28, 30, 32, 34, 36, 38],
        blouse_length=["14-16"] * 7, sleeve_elbow=["10-12"] * 7,
    )
    # Petticoat (by waist)
    pet_sizes = ["26", "28", "30", "32", "34", "36", "38", "40"]
    pet_rows = _rows(pet_sizes, waist=[26, 28, 30, 32, 34, 36, 38, 40], length=["38-42"] * 8)

    for b in ("biba", "aurelia", "fabindia", "trends"):
        charts.append(_chart(b, "F", "tops", "Tops, shirts & dresses", deepcopy(tops_rows),
                             dims=["bust"], quirk_shift=0.0))
        charts.append(_chart(b, "F", "jeans", "Jeans & formal trousers", deepcopy(jeans_rows),
                             dims=["waist", "hip"], quirk_shift=0.0,
                             notes=["Inseam is 30 in across sizes."]))
        charts.append(_chart(b, "F", "blouse", "Saree blouse", deepcopy(blouse_rows),
                             dims=["bust"], optional=["waist"], slack={"waist": 1.0}))
        charts.append(_chart(b, "F", "petticoat", "Petticoat", deepcopy(pet_rows),
                             dims=["waist"], quirk_shift=0.0, notes=["Petticoat length 38-42 in."]))
    # Zara women (EU)
    z_sizes = ["XS (EU 34)", "S (EU 36)", "M (EU 38)", "L (EU 40)", "XL (EU 42)", "XXL (EU 44)"]
    z_tops = _rows(
        z_sizes,
        bust=[(31, 33), (33, 35), (35, 36), (36, 38.5), (38.5, 41), (41, 43)],
        waist_ref=[24, 26, 27.5, 30, 32, 34],
        hip_ref=[35, 36, 38, 40, 42.5, 44.5],
        us=[2, 4, 6, 8, 10, 12], uk=[6, 8, 10, 12, 14, 16],
    )
    z_jeans = _rows(
        z_sizes,
        waist=[(25, 26), 27, (28, 29), 30, (31, 32), (33, 34)],
        hip=[35, 36.5, 38, 40, 42, 44],
    )
    z_blazer = _rows(
        z_sizes,
        bust=[(31, 33), (33, 35), (35, 36), (36, 38.5), (38.5, 41), (41, 43)],
        shoulder=[14.5, 15, 15.5, 16, 16.5, 17],
    )
    zq = dict(quirk_shift=0.5, size_up_between=True,
              notes=["Zara runs slim: if you are between sizes, size up. Zara Basic fits truest to size."])
    charts.append(_chart("zara", "F", "tops", "Tops, shirts & dresses", z_tops,
                         dims=["bust"], **zq))
    charts.append(_chart("zara", "F", "jeans", "Jeans & trousers", z_jeans,
                         dims=["waist", "hip"], **zq))
    charts.append(_chart("zara", "F", "blazer", "Blazers", z_blazer,
                         dims=["bust"], optional=["shoulder"], **zq))
    return charts


# --------------------------------------------------------------------------
# MEN
# --------------------------------------------------------------------------
M5 = ["S", "M", "L", "XL", "XXL"]
M_CHEST = [38, 40, 42, 44, 46]


def _men_charts():
    charts = []
    tshirt = _rows(M5, bust=M_CHEST, garment_chest=[41, 43, 45, 47, 49],
                   length=[26.5, 27.3, 28, 28.8, 29.5])
    shirt = _rows(M5, bust=M_CHEST, neck=[15, 15.5, 16, 17, 18],
                  shoulder=[17, 17.75, 18.5, 19.25, 20],
                  waist_ref=["30-32", "32-34", "34-36", "36-38", "38-40"],
                  garment_chest=[42, 44, 46, 48, 50], sleeve=[24.5, 25, 25.5, 26, 26.5],
                  length=[28.5, 29.3, 30, 30.8, 31.5], collar_cm=[38, 39, 40, 43, 45])
    kurta = _rows(M5, bust=M_CHEST, shoulder=[17, 17.75, 18.5, 19.25, 20],
                  waist=[(30, 32), (32, 34), (34, 36), (36, 38), (38, 40)],
                  garment_chest=[42, 44, 46, 48, 50],
                  length=["Fabindia 38-42, Trends 39-42"] * 5)
    jeans = _rows(M5, waist=[30, 32, 34, 36, 38], hip=[38, 40, 42, 44, 46],
                  inseam=["30 / 32 / 34"] * 5, outseam=["40-42"] * 5)
    blazer_sizes = ["36 (EU 46)", "38 (EU 48)", "40 (EU 50)", "42 (EU 52)", "44 (EU 54)"]
    blazer = _rows(blazer_sizes, bust=[36, 38, 40, 42, 44],
                   shoulder=[16.5, 17, 17.5, 18, 18.5], sleeve=[24, 24.4, 24.8, 25.2, 25.6],
                   length=[28, 28.5, 29, 29.5, 30])
    for b in ("fabindia", "trends"):
        charts.append(_chart(b, "M", "tshirt", "T-shirts & polos", deepcopy(tshirt),
                             dims=["bust"], notes=["Garment chest = chest + 3 in."]))
        charts.append(_chart(b, "M", "shirt", "Formal shirts", deepcopy(shirt),
                             dims=["bust"], optional=["neck", "shoulder"],
                             notes=["Add your neck size for a collar check."]))
        charts.append(_chart(b, "M", "kurta", "Kurta & pyjama", deepcopy(kurta),
                             dims=["bust"], optional=["waist", "shoulder"],
                             slack={"waist": 4.0}, quirk_shift=0.5, size_up_between=True,
                             notes=["Your chest decides the kurta size. The pyjama waist is elastic or drawstring, so waist is only a light check."]))
        charts.append(_chart(b, "M", "jeans", "Jeans, trousers & chinos", deepcopy(jeans),
                             dims=["waist", "hip"], notes=["Inseam options: 30 / 32 / 34 in."]))
        charts.append(_chart(b, "M", "blazer", "Blazers & Nehru jackets", deepcopy(blazer),
                             dims=["bust"], optional=["shoulder"]))

    # Zara men
    zs = ["S", "M", "L", "XL", "XXL"]
    z_shirt = _rows(
        zs, bust=[(36, 38), (38, 40), (41, 43), (44, 46), (47, 49)],
        waist_ref=["30-31", "32-33", "34-35", "36-38", "39-41"],
        neck=[15, 15.5, 16, 17, 17.5],
    )
    z_jeans = _rows(
        ["S (EU 38)", "M (EU 40)", "L (EU 42)", "XL (EU 44)", "XXL (EU 46)"],
        waist=[30, 32, 34, 36, 38], hip=[38, 40, 42, 44, 46],
    )
    z_blazer = _rows(
        ["S (EU 46)", "M (EU 48)", "L (EU 50)", "XL (EU 52)", "XXL (EU 54)"],
        bust=[(36, 37), (38, 39), (40, 41), (42, 43), (44, 45)],
    )
    zq = dict(quirk_shift=0.5, size_up_between=True,
              notes=["Zara runs slim: if you are between sizes, size up. Zara Basic fits truest to size."])
    charts.append(_chart("zara", "M", "tshirt", "T-shirts & polos", deepcopy(z_shirt),
                         dims=["bust"], **zq))
    charts.append(_chart("zara", "M", "shirt", "Shirts", deepcopy(z_shirt),
                         dims=["bust"], optional=["neck"], **zq))
    charts.append(_chart("zara", "M", "jeans", "Jeans & trousers", z_jeans,
                         dims=["waist", "hip"], **zq))
    charts.append(_chart("zara", "M", "blazer", "Blazers", z_blazer, dims=["bust"], **zq))
    return charts


# --------------------------------------------------------------------------
# Registry + "general" charts (free tier)
# --------------------------------------------------------------------------
_ALL: dict[str, dict[str, Any]] = {}
for _c in _women_charts() + _men_charts():
    _ALL[_c["id"]] = _c

SHARED_WOMEN = ("tops", "jeans", "blouse", "petticoat")


def _apply_brand_notes() -> None:
    """Brand behaviour taken from the size guide's notes (not invented)."""
    for c in _ALL.values():
        b, g, cat = c["brand"], c["gender"], c["category"]
        if g == "F" and b in ("biba", "aurelia", "fabindia", "trends") and cat in SHARED_WOMEN:
            c["notes"].append("Biba, Aurelia, Fabindia and Trends publish the same body chart for this, "
                              "so your size is the same in all four. Kurtas are where they differ.")
        if b == "fabindia" and cat in ("tops", "kurta", "tshirt", "shirt"):
            c["quirk_shift"] = float(c.get("quirk_shift", 0.0)) + 0.5
            c["notes"].append("Fabindia cotton can shrink about 1 in after washing, so we lean one notch larger when you are between sizes.")
        if b == "trends" and cat in ("tops", "kurta", "tshirt", "shirt", "jeans"):
            c["notes"].append("Trends slim-fit lines run about one size smaller. Tick 'Slim fit' if that is your cut.")


_apply_brand_notes()


def _average_charts(charts: list[dict]) -> dict:
    """Average numeric dim values across brand charts for sizes present in all."""
    base = deepcopy(charts[0])
    common = [r["size"] for r in base["rows"]
              if all(any(rr["size"] == r["size"] for rr in c["rows"]) for c in charts)]
    rows = []
    for size in common:
        dims = {}
        for d in base["dims"] + base["optional_dims"]:
            vals = []
            for c in charts:
                row = next(r for r in c["rows"] if r["size"] == size)
                v = row["dims"].get(d)
                if v is None:
                    continue
                lo, hi = (v if isinstance(v, (tuple, list)) else (v, v))
                vals.append((lo + hi) / 2)
            if vals:
                dims[d] = round(sum(vals) / len(vals), 2)
        rows.append({"size": size, "dims": dims, "extra": {}})
    base["rows"] = rows
    return base


def _build_general():
    out = {}
    groups: dict[tuple, list[dict]] = {}
    for c in _ALL.values():
        if c["brand"] == "zara":
            continue
        groups.setdefault((c["gender"], c["category"]), []).append(c)
    for (g, cat), cs in groups.items():
        avg = _average_charts(cs)
        avg.update({
            "id": f"general:{g}:{cat}",
            "brand": "general",
            "quirk_shift": 0.0,
            "dim_shift": {},
            "size_up_between": False,
            "notes": ["General size = average of Biba, Aurelia, Fabindia and Trends charts."],
            "source": "Average of reference brands",
        })
        out[avg["id"]] = avg
    return out


GENERAL = _build_general()


def get_chart(brand: str, gender: str, category: str) -> dict | None:
    if brand == "general":
        return GENERAL.get(f"general:{gender}:{category}")
    return _ALL.get(f"{brand}:{gender}:{category}")


def categories_for(brand: str, gender: str) -> list[str]:
    src = GENERAL if brand == "general" else _ALL
    cats = [c["category"] for c in src.values() if c["brand"] == brand and c["gender"] == gender]
    order = list(CATEGORY_LABELS[gender].keys())
    return sorted(cats, key=lambda c: order.index(c) if c in order else 99)


def catalog() -> dict:
    brands = []
    for key, info in BRAND_INFO.items():
        brands.append({
            "key": key, **info, "notes": BRAND_NOTES.get(key, []),
            "categories": {g: categories_for(key, g) for g in info["genders"]},
        })
    return {
        "brands": brands,
        "general": {g: categories_for("general", g) for g in ("F", "M")},
        "category_labels": CATEGORY_LABELS,
    }


def chart_public(chart: dict) -> dict:
    """Chart as returned to the UI (tuples -> lists)."""
    c = deepcopy(chart)
    for r in c["rows"]:
        for k, v in list(r["dims"].items()):
            if isinstance(v, tuple):
                r["dims"][k] = list(v)
    return c


SAREE_ADVICE = {
    "lengths": [
        {"name": "Standard drape", "metres": 5.5},
        {"name": "Fuller drape", "metres": 6.3},
    ],
    "blouse_piece_m": "0.8-1",
    "note": "Fabindia sarees run 5.5-6.3 m. Choose the 6.3 m length if you prefer a fuller drape.",
}
