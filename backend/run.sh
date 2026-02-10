#!/usr/bin/env bash
# Run from project root only. Usage: ./backend/run.sh
# (Running from inside backend/ will cause "No module named 'backend'")
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT" || exit 1
source backend/venv/bin/activate 2>/dev/null || true
exec python3 -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8001
