#!/usr/bin/env bash
# Run from project root. Usage: ./backend/run.sh
# Mirrors Render config: root dir = backend, uvicorn main:app
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/backend" || exit 1
source venv/bin/activate 2>/dev/null || true
exec python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8001
