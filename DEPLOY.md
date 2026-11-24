# FitSure / FitScan: deployment guide

One container serves everything: the FastAPI backend (`/api/...`) and the built React site (`/`). SQLite file database. No other services needed.

Tested: a clean copy builds with `npm install && npm run build`, and `uvicorn app.main:app` serves the site, `/api/health` returns ok, and the admin page rejects the default key once `FITSCAN_ADMIN_KEY` is set.
Not tested: the Docker build itself (no Docker daemon was available where this was prepared). If it fails, see "Without Docker" below.

## 0. Free public link on Render (no Docker needed, no card)

(Hugging Face Docker Spaces are paid now, so use Render.)

1. GitHub: create a free account, New repository `fitsure` (Public), click "uploading an existing file", drag in everything inside this folder (Ctrl+A in the folder, drag), Commit changes.
2. render.com: Sign up with GitHub. New > Web Service > pick the `fitsure` repository.
3. Settings: Runtime **Python 3**; Build Command `pip install -r backend/requirements-render.txt`; Start Command `cd backend && uvicorn app.main:app --host 0.0.0.0 --port $PORT`; Instance Type **Free**.
4. Environment variables (Advanced): `PYTHON_VERSION` = `3.12.3` (keeps the build on a Python version all packages support), `FITSCAN_ADMIN_KEY` = your own secret, and `DATABASE_URL` = your free Neon database link (see "Keeping the data" below). Without `DATABASE_URL` the data is lost on every restart.
5. Create Web Service. First build takes about 5 to 10 minutes. Link: `https://<name>.onrender.com`.
6. Free instances sleep when idle (about 1 minute to wake). With `DATABASE_URL` set, customers, reviews and saved profiles are kept. Open the link yourself just before it is graded. Without the pose model the photo scan uses the basic OpenCV scanner; typing measurements always works.

### Keeping the data (free Postgres on Neon)

Render's free disk is wiped on every restart, so SQLite there loses data. The app switches to PostgreSQL automatically when `DATABASE_URL` is set.

1. neon.tech > Sign up (free, no card) > Create project, name `fitsure`.
2. On the project dashboard click **Connect** and copy the connection string (starts with `postgresql://`, ends with `sslmode=require`).
3. In Render > your service > Environment > add `DATABASE_URL` = that string > Save (it redeploys).
4. Tables are created automatically on first start. Check: open `/api/stats`, log in once, restart the service from Render, open `/api/stats` again: the customer count stays.

Neon's free database sleeps when idle and wakes on the next request (about 1 second). Tested here against PostgreSQL 16: all 71 backend tests pass on both SQLite and Postgres, and data survived a server restart.

## 1. Environment variables

| Variable | Required | What it does |
|---|---|---|
| `FITSCAN_ADMIN_KEY` | YES, set your own | Password for `/admin` and the customer CSV. If unset it falls back to the public default `fitscan-admin`. |
| `PORT` | host sets it | Port the container listens on (default 8000). |
| `FITSCAN_DEMO_OTP` | optional | `1` (default) shows the login code on screen (demo). `0` hides it and sends the code by email, so SMTP must be set. |
| `FITSCAN_SMTP_HOST`, `FITSCAN_SMTP_PORT` (587), `FITSCAN_SMTP_USER`, `FITSCAN_SMTP_PASS`, `FITSCAN_SMTP_FROM` | only if `FITSCAN_DEMO_OTP=0` | Email delivery of login codes. Mobile (SMS) delivery is NOT implemented; mobile codes are only logged. |
| `FITSCAN_DEFAULT_CC` | optional | Default country code for mobile numbers (default `91`). |
| `DATABASE_URL` | recommended on Render | PostgreSQL connection string. If set, it is used instead of the SQLite file, so data survives restarts. |
| `FITSCAN_DB` | optional | Path of the SQLite file (default `backend/data/fitscan.db`). |
| `FITSCAN_CORS` | optional | Allowed origins, comma separated (default `*`). |
| `FITSCAN_SCANS_PER_MIN` | optional | Photo-scan rate limit per client (default 30). |

## 2. Option A: Render (easiest, free)

1. Push this folder to a GitHub repository.
2. Render dashboard > New > Blueprint > choose the repository. `render.yaml` does the rest.
3. After the first deploy, open the service > Environment, copy the generated `FITSCAN_ADMIN_KEY` (that is the admin password).
4. The site is at `https://<service-name>.onrender.com`. HTTPS is automatic (needed for phone cameras).

Free-plan limits: the service sleeps after inactivity (first request takes about 30 to 60 seconds) and the database resets on each restart or redeploy, so customers, reviews and saved profiles are lost. To keep data, use a paid plan and add a disk mounted at `/app/backend/data` (the commented lines in `render.yaml`).

## 3. Option B: any Docker host (Railway, Fly.io, a VPS)

```
docker build -t fitscan .
docker run -d --name fitscan --restart unless-stopped -p 8000:8000 \
  -e FITSCAN_ADMIN_KEY=choose-a-long-secret \
  -v fitscan-data:/app/backend/data \
  fitscan
```
The `-v` volume keeps the database. Put HTTPS in front (a hosted platform does it for you; on a VPS use Caddy or nginx). Phone cameras and the store widget need HTTPS on a real domain.

Minimal Caddy on a VPS (`/etc/caddy/Caddyfile`):
```
yourdomain.com {
    reverse_proxy localhost:8000
}
```

## 4. Without Docker (plain server)

Needs Python 3.11 or 3.12 and Node 20+.
```
cd frontend && npm install && npm run build && cd ..
cd backend
python -m venv venv && source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python download_model.py                                # optional pose model, better scan accuracy
FITSCAN_ADMIN_KEY=choose-a-long-secret uvicorn app.main:app --host 0.0.0.0 --port 8000
```
(Windows PowerShell: set `$env:FITSCAN_ADMIN_KEY="..."` on its own line first.) Run it under systemd or similar so it restarts.

## 5. Check it worked

- `https://<your-domain>/api/health` returns `{"status":"ok",...}`.
- `/` loads the shopper flow. Choose Woman, enter height 165 and type measurements 36/29/39 to get sizes.
- Pro tabs: Plan > Activate Pro (demo), then "Paste a size chart" > Try an example.
- `/admin` asks for your `FITSCAN_ADMIN_KEY`.
- `/store` seller dashboard and `/demo-store` widget demo.

## 6. Before real public use (known gaps)

- **Login codes show on screen** while `FITSCAN_DEMO_OTP=1`, so anyone can log in as any email or number. Set `FITSCAN_DEMO_OTP=0` with SMTP for email. SMS needs a provider (not built).
- **Pro is a demo switch.** Anyone can activate it with one click. There are no payments (Razorpay or similar is not built) and no server-side check of a paid plan.
- **Privacy:** contact details are stored as typed. Add a privacy policy and consent text before collecting from real users. Photos are processed and not stored.
- **Accuracy is not validated** against tape measurements yet (use the `/lab` page for that).
- **Admin** is one shared key. Use a long secret and do not share the link.
- Single SQLite file: fine for a class demo or pilot, not for heavy traffic.
- Pose model: `download_model.py` fetches it during the Docker build. If the build host can't reach the internet, the app falls back to a basic OpenCV scanner (less accurate).

## 7. Tests (optional)
```
cd backend && pip install -r requirements-dev.txt && python -m pytest -q      # 71 tests
cd frontend && npm test        # needs the backend running on port 8765, see src/app.test.jsx
```

## 8. What is in the folder
`backend/app/` API (engine, charts, accounts, pasted chart reader, store charts, vision), `backend/static/widget.js` store widget, `frontend/src/` React app (3D avatar uses three.js), `Dockerfile`, `render.yaml`, `.dockerignore`, `setup.bat` and `run.bat` for local Windows use.
