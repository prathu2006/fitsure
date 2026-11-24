# Build:  docker build -t fitscan .      Run:  docker run -p 8000:8000 -v fitscan-data:/app/backend/data fitscan
FROM node:22-slim AS web
WORKDIR /web
COPY frontend/package*.json ./
RUN npm install --no-audit --no-fund
COPY frontend/ ./
RUN npm run build

FROM python:3.12-slim
RUN apt-get update && apt-get install -y --no-install-recommends libgl1 libglib2.0-0 && rm -rf /var/lib/apt/lists/*
WORKDIR /app/backend
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ ./
RUN python download_model.py || true
COPY --from=web /web/dist /app/frontend/dist
# some hosts (Hugging Face Spaces) run the container as a non-root user: make the data and model folders writable
RUN mkdir -p /app/backend/data /app/backend/models && chmod -R a+rwX /app/backend/data /app/backend/models
ENV PORT=8000
EXPOSE 8000
CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT}"]
