"""Customer accounts for FitScan: passwordless login with email OR mobile (one-time code),
saved profile ("memory"), scan history, customer reviews, public stats and a small admin view.

Demo mode (default): no SMS/email gateway is connected, so the one-time code is returned in the API
response and shown on screen. For production set FITSCAN_DEMO_OTP=0 and plug a sender into `deliver()`
(SMTP for email is built in via FITSCAN_SMTP_*; SMS needs a provider such as MSG91 or Twilio).
"""
from __future__ import annotations

import csv
import hashlib
import io
import json
import logging
import os
import re
import secrets
import smtplib
import time
from email.message import EmailMessage
from typing import Literal

from fastapi import APIRouter, Header, HTTPException
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel, Field

from . import db

log = logging.getLogger("fitscan.accounts")
router = APIRouter(prefix="/api")

OTP_TTL = 10 * 60
OTP_MAX_TRIES = 5
OTP_REQUESTS_PER_WINDOW = 5
OTP_WINDOW = 10 * 60
SESSION_TTL = 90 * 24 * 3600
DEFAULT_CC = os.environ.get("FITSCAN_DEFAULT_CC", "91")
HISTORY_KEEP = 20

SCHEMA = """
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT, identifier TEXT UNIQUE NOT NULL, kind TEXT NOT NULL,
  name TEXT, created REAL NOT NULL, last_login REAL NOT NULL, profile_json TEXT);
CREATE TABLE IF NOT EXISTS otps (
  id INTEGER PRIMARY KEY AUTOINCREMENT, identifier TEXT NOT NULL, code_hash TEXT NOT NULL,
  expires REAL NOT NULL, tries INTEGER NOT NULL DEFAULT 0, created REAL NOT NULL, used INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY, customer_id INTEGER NOT NULL, created REAL NOT NULL, expires REAL NOT NULL);
CREATE TABLE IF NOT EXISTS scan_history (
  id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER NOT NULL, created REAL NOT NULL,
  gender TEXT, height_cm REAL, measures_json TEXT, sizes_json TEXT);
CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT, customer_id INTEGER, created REAL NOT NULL,
  rating INTEGER NOT NULL, comment TEXT, display_name TEXT);
"""


def _init():
    with db.conn() as c:
        c.executescript(SCHEMA)


_init()


# ---------------------------------------------------------------- identifiers
_EMAIL = re.compile(r"^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$")


def normalize(raw: str) -> tuple[str, str]:
    """-> (kind, normalized identifier). kind is 'email' or 'mobile'."""
    s = (raw or "").strip()
    if not s:
        raise HTTPException(422, "Enter your email or mobile number.")
    if "@" in s:
        s = s.lower()
        if not _EMAIL.match(s) or len(s) > 120:
            raise HTTPException(422, "That email address doesn't look right.")
        return "email", s
    digits = re.sub(r"[\s\-().]", "", s)
    plus = digits.startswith("+")
    digits = digits.lstrip("+")
    if not digits.isdigit():
        raise HTTPException(422, "Enter a valid email or a mobile number with digits only.")
    if not plus:
        if len(digits) == 10:
            digits = DEFAULT_CC + digits
        elif len(digits) == 11 and digits.startswith("0"):
            digits = DEFAULT_CC + digits[1:]
    if not (8 <= len(digits) <= 15):
        raise HTTPException(422, "That mobile number doesn't look right. Use 10 digits, or include the country code.")
    return "mobile", "+" + digits


def mask(kind: str, ident: str) -> str:
    if kind == "email":
        user, _, dom = ident.partition("@")
        return (user[:1] + "***" if user else "***") + "@" + dom
    return "+" + "*" * max(0, len(ident) - 5) + ident[-4:]


def _h(s: str) -> str:
    return hashlib.sha256(s.encode()).hexdigest()


def _clean_name(n: str | None) -> str:
    return re.sub(r"\s+", " ", (n or "").strip())[:40]


def _first_name(n: str | None) -> str:
    return (_clean_name(n).split(" ")[0] or "Customer")[:20]


# ---------------------------------------------------------------- delivery
def deliver(kind: str, ident: str, code: str) -> bool:
    """Send the code. Returns True if actually sent through a real channel."""
    if kind == "email" and os.environ.get("FITSCAN_SMTP_HOST"):
        try:
            msg = EmailMessage()
            msg["Subject"] = "Your FitScan code"
            msg["From"] = os.environ.get("FITSCAN_SMTP_FROM", "no-reply@fitscan.local")
            msg["To"] = ident
            msg.set_content(f"Your FitScan login code is {code}. It expires in 10 minutes.")
            with smtplib.SMTP(os.environ["FITSCAN_SMTP_HOST"], int(os.environ.get("FITSCAN_SMTP_PORT", "587"))) as s:
                s.starttls()
                if os.environ.get("FITSCAN_SMTP_USER"):
                    s.login(os.environ["FITSCAN_SMTP_USER"], os.environ.get("FITSCAN_SMTP_PASS", ""))
                s.send_message(msg)
            return True
        except Exception:  # noqa
            log.exception("email delivery failed")
            return False
    log.info("SMS/email gateway not configured; code for %s not sent", mask(kind, ident))
    return False


def demo_mode() -> bool:
    return os.environ.get("FITSCAN_DEMO_OTP", "1") != "0"


# ---------------------------------------------------------------- sessions
def _customer_dict(row) -> dict:
    return {"id": row["id"], "name": row["name"] or "", "kind": row["kind"],
            "masked": mask(row["kind"], row["identifier"]), "created": row["created"]}


def current_customer(authorization: str | None = Header(default=None)):
    """Dependency: customer row or None (never raises)."""
    if not authorization or not authorization.lower().startswith("bearer "):
        return None
    th = _h(authorization.split(" ", 1)[1].strip())
    with db.conn() as c:
        s = c.execute("SELECT * FROM sessions WHERE token_hash=? AND expires>?", (th, time.time())).fetchone()
        if not s:
            return None
        return c.execute("SELECT * FROM customers WHERE id=?", (s["customer_id"],)).fetchone()


def need_customer(authorization: str | None = Header(default=None)):
    cu = current_customer(authorization)
    if not cu:
        raise HTTPException(401, "Please log in.")
    return cu


# ---------------------------------------------------------------- auth routes
class RequestIn(BaseModel):
    identifier: str = Field(max_length=140)


class VerifyIn(BaseModel):
    identifier: str = Field(max_length=140)
    code: str = Field(min_length=4, max_length=8)
    name: str | None = Field(default=None, max_length=60)


@router.post("/auth/request")
def auth_request(body: RequestIn):
    kind, ident = normalize(body.identifier)
    now = time.time()
    with db.conn() as c:
        n = c.execute("SELECT COUNT(*) FROM otps WHERE identifier=? AND created>?", (ident, now - OTP_WINDOW)).fetchone()[0]
        if n >= OTP_REQUESTS_PER_WINDOW:
            raise HTTPException(429, "Too many codes requested. Please wait a few minutes.")
        code = f"{secrets.randbelow(10**6):06d}"
        c.execute("INSERT INTO otps(identifier,code_hash,expires,created) VALUES (?,?,?,?)",
                  (ident, _h(ident + ":" + code), now + OTP_TTL, now))
        existing = c.execute("SELECT 1 FROM customers WHERE identifier=?", (ident,)).fetchone() is not None
    sent = deliver(kind, ident, code)
    out = {"kind": kind, "masked": mask(kind, ident), "sent": sent, "existing": existing,
           "expires_in": OTP_TTL, "demo": False}
    if demo_mode() and not sent:
        out["demo"] = True
        out["demo_code"] = code  # demo only: no gateway is connected
    return out


@router.post("/auth/verify")
def auth_verify(body: VerifyIn):
    kind, ident = normalize(body.identifier)
    now = time.time()
    code = re.sub(r"\D", "", body.code)
    with db.conn() as c:
        o = c.execute("SELECT * FROM otps WHERE identifier=? AND used=0 AND expires>? ORDER BY id DESC LIMIT 1",
                      (ident, now)).fetchone()
        if not o:
            raise HTTPException(400, "That code has expired. Please request a new one.")
        if o["tries"] >= OTP_MAX_TRIES:
            raise HTTPException(429, "Too many wrong attempts. Please request a new code.")
        if not secrets.compare_digest(o["code_hash"], _h(ident + ":" + code)):
            c.execute("UPDATE otps SET tries=tries+1 WHERE id=?", (o["id"],))
            c.commit()
            raise HTTPException(400, "That code isn't right. Check it and try again.")
        c.execute("UPDATE otps SET used=1 WHERE id=?", (o["id"],))
        row = c.execute("SELECT * FROM customers WHERE identifier=?", (ident,)).fetchone()
        is_new = row is None
        name = _clean_name(body.name)
        if is_new:
            c.execute("INSERT INTO customers(identifier,kind,name,created,last_login) VALUES (?,?,?,?,?)",
                      (ident, kind, name, now, now))
        else:
            c.execute("UPDATE customers SET last_login=?, name=COALESCE(NULLIF(?,''), name) WHERE id=?", (now, name, row["id"]))
        row = c.execute("SELECT * FROM customers WHERE identifier=?", (ident,)).fetchone()
        token = secrets.token_urlsafe(32)
        c.execute("INSERT INTO sessions(token_hash,customer_id,created,expires) VALUES (?,?,?,?)",
                  (_h(token), row["id"], now, now + SESSION_TTL))
        c.execute("DELETE FROM sessions WHERE expires<?", (now,))
    return {"token": token, "is_new": is_new, "customer": _customer_dict(row)}


@router.post("/auth/logout")
def auth_logout(authorization: str | None = Header(default=None)):
    if authorization and authorization.lower().startswith("bearer "):
        with db.conn() as c:
            c.execute("DELETE FROM sessions WHERE token_hash=?", (_h(authorization.split(" ", 1)[1].strip()),))
    return {"ok": True}


class NameIn(BaseModel):
    name: str = Field(max_length=60)


@router.get("/me")
def me(authorization: str | None = Header(default=None)):
    cu = need_customer(authorization)
    return {"customer": _customer_dict(cu)}


@router.put("/me")
def me_update(body: NameIn, authorization: str | None = Header(default=None)):
    cu = need_customer(authorization)
    with db.conn() as c:
        c.execute("UPDATE customers SET name=? WHERE id=?", (_clean_name(body.name), cu["id"]))
        row = c.execute("SELECT * FROM customers WHERE id=?", (cu["id"],)).fetchone()
    return {"customer": _customer_dict(row)}


@router.delete("/me")
def me_delete(authorization: str | None = Header(default=None)):
    """Right to erasure: removes the account, saved profile, history and sessions. Reviews stay, unlinked."""
    cu = need_customer(authorization)
    with db.conn() as c:
        c.execute("DELETE FROM sessions WHERE customer_id=?", (cu["id"],))
        c.execute("DELETE FROM scan_history WHERE customer_id=?", (cu["id"],))
        c.execute("UPDATE reviews SET customer_id=NULL WHERE customer_id=?", (cu["id"],))
        c.execute("DELETE FROM customers WHERE id=?", (cu["id"],))
    return {"deleted": True}


# ---------------------------------------------------------------- memory
class ProfileIn(BaseModel):
    gender: Literal["F", "M"]
    height_cm: float | None = Field(default=None, ge=90, le=230)
    unit: Literal["in", "cm"] = "in"
    measures: dict[str, float] = Field(default_factory=dict)
    sizes: dict[str, str] = Field(default_factory=dict)  # category -> recommended size, for the history list


def _valid_measures(m: dict[str, float]) -> dict[str, float]:
    out = {}
    for k, v in m.items():
        if k in ("bust", "waist", "hip", "neck", "shoulder") and 8 <= v <= 90:
            out[k] = round(float(v), 2)
    return out


@router.get("/me/profile")
def profile_get(authorization: str | None = Header(default=None)):
    cu = need_customer(authorization)
    prof = json.loads(cu["profile_json"]) if cu["profile_json"] else None
    with db.conn() as c:
        rows = c.execute("SELECT * FROM scan_history WHERE customer_id=? ORDER BY id DESC LIMIT ?", (cu["id"], HISTORY_KEEP)).fetchall()
    hist = [{"id": r["id"], "created": r["created"], "gender": r["gender"], "height_cm": r["height_cm"],
             "measures": json.loads(r["measures_json"] or "{}"), "sizes": json.loads(r["sizes_json"] or "{}")} for r in rows]
    return {"profile": prof, "history": hist}


@router.put("/me/profile")
def profile_put(body: ProfileIn, authorization: str | None = Header(default=None)):
    cu = need_customer(authorization)
    m = _valid_measures(body.measures)
    if not all(k in m for k in ("bust", "waist", "hip")):
        raise HTTPException(422, "Bust, waist and hip are needed to save your profile.")
    now = time.time()
    prof = {"gender": body.gender, "height_cm": body.height_cm, "unit": body.unit, "measures": m, "saved": now}
    sizes = {k[:24]: v[:12] for k, v in list(body.sizes.items())[:20]}
    with db.conn() as c:
        c.execute("UPDATE customers SET profile_json=? WHERE id=?", (json.dumps(prof), cu["id"]))
        last = c.execute("SELECT * FROM scan_history WHERE customer_id=? ORDER BY id DESC LIMIT 1", (cu["id"],)).fetchone()
        same = last and json.loads(last["measures_json"] or "{}") == m and last["gender"] == body.gender
        if same:
            c.execute("UPDATE scan_history SET sizes_json=?, created=? WHERE id=?", (json.dumps(sizes), now, last["id"]))
        else:
            c.execute("INSERT INTO scan_history(customer_id,created,gender,height_cm,measures_json,sizes_json) VALUES (?,?,?,?,?,?)",
                      (cu["id"], now, body.gender, body.height_cm, json.dumps(m), json.dumps(sizes)))
            c.execute("DELETE FROM scan_history WHERE customer_id=? AND id NOT IN "
                      "(SELECT id FROM scan_history WHERE customer_id=? ORDER BY id DESC LIMIT ?)", (cu["id"], cu["id"], HISTORY_KEEP))
    return {"saved": True, "profile": prof}


@router.delete("/me/profile")
def profile_clear(authorization: str | None = Header(default=None)):
    cu = need_customer(authorization)
    with db.conn() as c:
        c.execute("UPDATE customers SET profile_json=NULL WHERE id=?", (cu["id"],))
        c.execute("DELETE FROM scan_history WHERE customer_id=?", (cu["id"],))
    return {"cleared": True}


# ---------------------------------------------------------------- reviews + stats
class ReviewIn(BaseModel):
    rating: int = Field(ge=1, le=5)
    comment: str | None = Field(default=None, max_length=500)
    name: str | None = Field(default=None, max_length=40)


@router.post("/reviews")
def review_add(body: ReviewIn, authorization: str | None = Header(default=None)):
    cu = current_customer(authorization)
    comment = re.sub(r"\s+", " ", (body.comment or "").strip())[:500]
    name = _first_name(body.name or (cu["name"] if cu else None))
    with db.conn() as c:
        c.execute("INSERT INTO reviews(customer_id,created,rating,comment,display_name) VALUES (?,?,?,?,?)",
                  (cu["id"] if cu else None, time.time(), body.rating, comment, name))
    return {"thanks": True}


def _review_summary(limit: int = 6) -> dict:
    with db.conn() as c:
        n, avg = c.execute("SELECT COUNT(*), AVG(rating) FROM reviews").fetchone()
        dist = {str(i): 0 for i in range(1, 6)}
        for r in c.execute("SELECT rating, COUNT(*) AS k FROM reviews GROUP BY rating"):
            dist[str(r["rating"])] = r["k"]
        rows = c.execute("SELECT rating, comment, display_name, created FROM reviews WHERE comment<>'' "
                         "ORDER BY created DESC LIMIT ?", (limit,)).fetchall()
    return {"count": n, "average": round(float(avg), 2) if avg else None, "distribution": dist,
            "recent": [{"rating": r["rating"], "comment": r["comment"], "name": r["display_name"] or "Customer",
                        "created": r["created"]} for r in rows]}


@router.get("/reviews/summary")
def reviews_summary():
    return _review_summary()


@router.get("/stats")
def stats():
    with db.conn() as c:
        customers = c.execute("SELECT COUNT(*) FROM customers").fetchone()[0]
        saved = c.execute("SELECT COUNT(*) FROM scan_history").fetchone()[0]
    rs = _review_summary(0)
    return {"customers": customers, "saved_scans": saved, "reviews": rs["count"], "average_rating": rs["average"]}


# ---------------------------------------------------------------- admin
def _admin(key: str | None):
    expected = os.environ.get("FITSCAN_ADMIN_KEY", "fitscan-admin")
    if not key or not secrets.compare_digest(key, expected):
        raise HTTPException(401, "Admin key needed.")


@router.get("/admin/overview")
def admin_overview(x_admin_key: str | None = Header(default=None)):
    _admin(x_admin_key)
    now = time.time()
    with db.conn() as c:
        rows = c.execute("SELECT c.*, (SELECT COUNT(*) FROM scan_history h WHERE h.customer_id=c.id) AS scans "
                         "FROM customers c ORDER BY c.id DESC LIMIT 500").fetchall()
        total = c.execute("SELECT COUNT(*) FROM customers").fetchone()[0]
        day = 24 * 3600
        daily = []
        for i in range(13, -1, -1):
            start = (int(now // day) - i) * day
            k = c.execute("SELECT COUNT(*) FROM customers WHERE created>=? AND created<?", (start, start + day)).fetchone()[0]
            daily.append({"date": time.strftime("%d %b", time.gmtime(start)), "signups": k})
        revs = c.execute("SELECT r.*, cu.kind, cu.identifier FROM reviews r LEFT JOIN customers cu ON cu.id=r.customer_id "
                         "ORDER BY r.id DESC LIMIT 200").fetchall()
        email_n = c.execute("SELECT COUNT(*) FROM customers WHERE kind='email'").fetchone()[0]
    return {
        "totals": {"customers": total, "email": email_n, "mobile": total - email_n, **{k: v for k, v in stats().items() if k != "customers"}},
        "daily": daily,
        "customers": [{"id": r["id"], "name": r["name"] or "", "kind": r["kind"], "masked": mask(r["kind"], r["identifier"]),
                       "created": r["created"], "last_login": r["last_login"], "scans": r["scans"]} for r in rows],
        "reviews": [{"id": r["id"], "rating": r["rating"], "comment": r["comment"], "name": r["display_name"],
                     "who": mask(r["kind"], r["identifier"]) if r["identifier"] else "guest", "created": r["created"]} for r in revs],
        "summary": _review_summary(0),
    }


@router.get("/admin/customers.csv")
def admin_csv(x_admin_key: str | None = Header(default=None)):
    _admin(x_admin_key)
    buf = io.StringIO()
    w = csv.writer(buf)
    w.writerow(["id", "name", "type", "contact (masked)", "registered", "last login", "saved scans"])
    for r in admin_overview(x_admin_key)["customers"]:
        w.writerow([r["id"], r["name"], r["kind"], r["masked"],
                    time.strftime("%Y-%m-%d %H:%M", time.gmtime(r["created"])),
                    time.strftime("%Y-%m-%d %H:%M", time.gmtime(r["last_login"])), r["scans"]])
    return PlainTextResponse(buf.getvalue(), media_type="text/csv",
                             headers={"Content-Disposition": "attachment; filename=fitscan-customers.csv"})
