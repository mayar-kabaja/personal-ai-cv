# Backend (AI CV Assistant)

FastAPI server that loads CV data and answers questions via Groq.

## Run

**From the project root** (one level above `backend/`), not from inside `backend/`:

```bash
cd /path/to/personal-ai-cv
./backend/run.sh
```

If you run uvicorn from inside `backend/`, you'll get `ModuleNotFoundError: No module named 'backend'` because the app is meant to be run as a top-level package.

Manual run (from project root):

```bash
source backend/venv/bin/activate   # if you use a venv
pip install -r backend/requirements.txt
python3 -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8001
```

## Environment

Copy `backend/.env.example` to `backend/.env` and set:

- `GROQ_API_KEY` — required for LLM answers
