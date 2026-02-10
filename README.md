# personal-ai-cv

Interactive AI CV assistant: chat with an AI that knows your experience, skills, education, and projects. Ask questions and get answers backed by your CV data.

## Stack

- **Frontend:** Next.js, React, TypeScript
- **Backend:** FastAPI, Python (Groq for LLM answers)
- **Data:** CV/profile loaded from backend; chat history sent for context

## Project structure

```
personal-ai-cv/
├── backend/           # FastAPI app
│   ├── main.py        # API routes
│   ├── ask_service.py # LLM / Groq integration
│   ├── load_data.py   # CV data loading
│   ├── run.sh         # Run server from project root
│   ├── requirements.txt
│   └── .env.example   # GROQ_API_KEY
├── frontend/          # Next.js app
│   ├── src/
│   │   ├── pages/     # index (chat), about, _app, _document
│   │   ├── components/ # Sidebar, MessageContent, etc.
│   │   ├── styles/    # globals.css
│   │   └── utils/    # api, sounds
│   ├── public/        # favicon, og-image
│   └── scripts/       # generate-og-image.mjs
└── README.md
```

## Run locally

**Backend** (must run from project root):

```bash
cd /path/to/personal-ai-cv
./backend/run.sh
```

Or with a virtualenv:

```bash
cd /path/to/personal-ai-cv
python3 -m venv backend/venv
source backend/venv/bin/activate  # or Windows: backend\venv\Scripts\activate
pip install -r backend/requirements.txt
python3 -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8001
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app expects the API at port 8001 (or set `NEXT_PUBLIC_API_URL`).

## Environment

- **Backend:** Copy `backend/.env.example` to `backend/.env` and set `GROQ_API_KEY`.
- **Frontend:** Optional `NEXT_PUBLIC_SITE_URL` for OG image URL; optional `NEXT_PUBLIC_API_URL` if the API is not on the same host.

## OG image

To regenerate the social share image:

```bash
cd frontend && npm run og-image
```

This builds `frontend/public/og-image.png` from `frontend/public/og-image.svg`.
