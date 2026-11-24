# FitScan

Photo-based size recommender: 2 photos -> measurements -> **probability** each size fits, for tops, kurtas, jeans, blazers, blouses, petticoats (women and men). Free = general sizes. Pro (demo switch) = brand sizes (Biba, Aurelia, Fabindia, Trends, Zara). Stores embed a widget that uses their own size chart.

## Run on Windows
1. Install Python 3.11/3.12 (tick "Add to PATH") and, optionally, Node.js LTS.
2. Double-click `setup.bat` (once), then `run.bat`. Opens http://localhost:8000.

## Put it live
See DEPLOY.md for step-by-step deployment (Render, Docker, VPS) and the environment variables.

## Pages
- `/` shopper flow - `/store` seller dashboard (CSV charts, embed code) - `/demo-store` widget demo - `/lab` validation (20 reference people, scan-vs-tape accuracy, calibration)

## Tests
`cd backend && venv\Scripts\python -m pytest tests` (needs `pip install -r requirements-dev.txt`).

## Know the limits
- Two-photo scanning is an estimate (expect ~2-4 cm error). Users can edit the numbers; use the Lab page to measure and calibrate error against a tape.
- Without the pose model the app uses a basic OpenCV scanner (less accurate). `setup.bat` downloads the model.
- Pro is a demo switch: no payments yet. Login is by email or mobile code (code shown on screen in demo mode). Add real billing and SMS before charging anyone. See DEPLOY.md.
- Charts are the approximate ones from your PDF; kids' and plus sizes are not covered.
