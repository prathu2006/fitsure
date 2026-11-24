"""Tiny SQLite layer (stdlib only). Photos are NEVER stored - only stores, charts,
feedback and validation measurements."""
from __future__ import annotations

import json
import os
import secrets
import re
import sqlite3
import threading
import time
from contextlib import contextmanager
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DB_PATH = Path(os.environ.get("FITSCAN_DB", BASE_DIR / "data" / "fitscan.db"))
DATABASE_URL = os.environ.get("DATABASE_URL", "").strip()   # set this (Postgres) to keep data on hosts with a temporary disk
_lock = threading.Lock()

SCHEMA = """
CREATE TABLE IF NOT EXISTS stores (
  id TEXT PRIMARY KEY, name TEXT NOT NULL, api_key TEXT UNIQUE NOT NULL, created REAL NOT NULL);
CREATE TABLE IF NOT EXISTS store_charts (
  id INTEGER PRIMARY KEY AUTOINCREMENT, store_id TEXT NOT NULL, gender TEXT NOT NULL,
  category TEXT NOT NULL, title TEXT NOT NULL, chart_json TEXT NOT NULL, updated REAL NOT NULL,
  UNIQUE(store_id, gender, category));
CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT, created REAL NOT NULL, chart_id TEXT NOT NULL,
  size TEXT NOT NULL, outcome TEXT NOT NULL, p_fit REAL, p_tight REAL, p_loose REAL, measures_json TEXT);
CREATE TABLE IF NOT EXISTS validation (
  id INTEGER PRIMARY KEY AUTOINCREMENT, created REAL NOT NULL, label TEXT, dim TEXT NOT NULL,
  scan_raw_cm REAL NOT NULL, tape_cm REAL NOT NULL);
"""


def _pg_sql(sql: str) -> str:
    """Translate the (simple) SQLite SQL used in this app to PostgreSQL."""
    sql = sql.replace("?", "%s")
    sql = re.sub(r"INTEGER PRIMARY KEY AUTOINCREMENT", "BIGSERIAL PRIMARY KEY", sql)
    sql = re.sub(r"\bREAL\b", "DOUBLE PRECISION", sql)
    return sql


class _PGConn:
    """Gives a psycopg2 connection the small part of the sqlite3 API this app uses."""

    def __init__(self, raw):
        import psycopg2.extras
        self.raw = raw
        self._factory = psycopg2.extras.DictCursor

    def execute(self, sql, params=()):
        cur = self.raw.cursor(cursor_factory=self._factory)
        cur.execute(_pg_sql(sql), tuple(params))
        return cur

    def executescript(self, script):
        for stmt in script.split(";"):
            if stmt.strip():
                self.execute(stmt)

    def commit(self):
        self.raw.commit()

    def rollback(self):
        self.raw.rollback()

    def close(self):
        self.raw.close()


def _connect():
    if DATABASE_URL:
        import psycopg2
        url = DATABASE_URL.replace("postgres://", "postgresql://", 1)
        return _PGConn(psycopg2.connect(url, connect_timeout=15))
    c = sqlite3.connect(DB_PATH)
    c.row_factory = sqlite3.Row
    return c


def _init():
    if not DATABASE_URL:
        DB_PATH.parent.mkdir(parents=True, exist_ok=True)
        with sqlite3.connect(DB_PATH) as c:
            c.executescript(SCHEMA)
        return
    c = _connect()
    try:
        c.executescript(SCHEMA)
        c.commit()
    finally:
        c.close()


_init()


@contextmanager
def conn():
    with _lock:
        c = _connect()
        try:
            yield c
            c.commit()
        except Exception:
            try:
                c.rollback()
            except Exception:
                pass
            raise
        finally:
            c.close()


# ---- stores --------------------------------------------------------------
def create_store(name: str, api_key: str | None = None) -> dict:
    sid = "st_" + secrets.token_hex(4)
    key = api_key or ("fs_" + secrets.token_urlsafe(18))
    with conn() as c:
        c.execute("INSERT INTO stores(id,name,api_key,created) VALUES (?,?,?,?)", (sid, name, key, time.time()))
    return {"id": sid, "name": name, "api_key": key}


def store_by_key(key: str | None) -> dict | None:
    if not key:
        return None
    with conn() as c:
        r = c.execute("SELECT * FROM stores WHERE api_key=?", (key,)).fetchone()
    return dict(r) if r else None


def upsert_store_chart(store_id: str, gender: str, category: str, title: str, chart: dict):
    with conn() as c:
        c.execute(
            """INSERT INTO store_charts(store_id,gender,category,title,chart_json,updated)
               VALUES (?,?,?,?,?,?)
               ON CONFLICT(store_id,gender,category)
               DO UPDATE SET title=excluded.title, chart_json=excluded.chart_json, updated=excluded.updated""",
            (store_id, gender, category, title, json.dumps(chart), time.time()))


def store_charts(store_id: str) -> list[dict]:
    with conn() as c:
        rows = c.execute("SELECT * FROM store_charts WHERE store_id=? ORDER BY gender, category", (store_id,)).fetchall()
    return [{"id": r["id"], "gender": r["gender"], "category": r["category"], "title": r["title"],
             "chart": json.loads(r["chart_json"]), "updated": r["updated"]} for r in rows]


def store_chart(store_id: str, gender: str, category: str) -> dict | None:
    with conn() as c:
        r = c.execute("SELECT chart_json FROM store_charts WHERE store_id=? AND gender=? AND category=?",
                      (store_id, gender, category)).fetchone()
    return json.loads(r["chart_json"]) if r else None


def delete_store_chart(store_id: str, chart_row_id: int) -> bool:
    with conn() as c:
        cur = c.execute("DELETE FROM store_charts WHERE store_id=? AND id=?", (store_id, chart_row_id))
        return cur.rowcount > 0


# ---- feedback ------------------------------------------------------------
def add_feedback(chart_id, size, outcome, p_fit, p_tight, p_loose, measures):
    with conn() as c:
        c.execute("INSERT INTO feedback(created,chart_id,size,outcome,p_fit,p_tight,p_loose,measures_json)"
                  " VALUES (?,?,?,?,?,?,?,?)",
                  (time.time(), chart_id, size, outcome, p_fit, p_tight, p_loose, json.dumps(measures)))


def all_feedback() -> list[dict]:
    with conn() as c:
        return [dict(r) for r in c.execute("SELECT * FROM feedback").fetchall()]


# ---- validation ----------------------------------------------------------
def add_validation(label, dim, scan_raw_cm, tape_cm):
    with conn() as c:
        c.execute("INSERT INTO validation(created,label,dim,scan_raw_cm,tape_cm) VALUES (?,?,?,?,?)",
                  (time.time(), label, dim, scan_raw_cm, tape_cm))


def all_validation() -> list[dict]:
    with conn() as c:
        return [dict(r) for r in c.execute("SELECT * FROM validation ORDER BY id").fetchall()]


def clear_validation():
    with conn() as c:
        c.execute("DELETE FROM validation")
