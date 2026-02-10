const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '/api';

export interface AskResponse {
  answer?: string;
  [key: string]: unknown;
}

export interface CvData {
  profile?: {
    name?: string;
    jobTitle?: string;
    contact?: { email?: string; phone?: string };
    links?: { github?: string; linkedin?: string };
    location?: string;
  };
  experience?: Array<{ role?: string; company?: string; dates?: string; location?: string | null }>;
  projects?: Array<{ name?: string; url?: string; description?: string }>;
  education?: unknown[];
  skills?: Record<string, string[] | string>;
}

export async function getCvData(): Promise<CvData> {
  const res = await fetch(`${API_BASE}/cv`);
  if (!res.ok) throw new Error('Failed to load CV data');
  return res.json() as Promise<CvData>;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function askQuestion(question: string, history?: ChatMessage[]): Promise<string | AskResponse> {
  const res = await fetch(`${API_BASE}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, history: history ?? [] }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({})) as { detail?: string | unknown[]; error?: string };
    const raw = body?.detail ?? body?.error ?? res.statusText;
    const message = Array.isArray(raw) ? raw.map((e: unknown) => (e as { msg?: string })?.msg ?? e).join(', ') : raw;
    throw new Error(typeof message === 'string' ? message : `Request failed: ${res.status}`);
  }

  const data = (await res.json()) as AskResponse;
  return data;
}
