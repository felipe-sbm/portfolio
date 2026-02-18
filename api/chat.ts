const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'openai/gpt-oss-120b';

type ChatMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

function getApiKey(): string | undefined {
  const key = process.env.NEXT_PRIVATE_GROQ_API || process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  if (!key) return undefined;
  return key.trim().replace(/^['"]|['"]$/g, '');
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    return res.status(500).json({ error: 'Groq API key not configured on server' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const messages = Array.isArray(body.messages) ? body.messages : [];

    if (!messages.length) {
      return res.status(400).json({ error: 'messages is required' });
    }

    const sanitizedMessages: ChatMessage[] = messages
      .filter((message: unknown): message is ChatMessage => {
        if (!message || typeof message !== 'object') return false;
        const parsed = message as ChatMessage;
        return (
          (parsed.role === 'system' || parsed.role === 'user' || parsed.role === 'assistant') &&
          typeof parsed.content === 'string' &&
          parsed.content.trim().length > 0
        );
      })
      .slice(-20);

    if (!sanitizedMessages.length) {
      return res.status(400).json({ error: 'No valid messages provided' });
    }

    const groqResponse = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: body.model || DEFAULT_MODEL,
        temperature: typeof body.temperature === 'number' ? body.temperature : 0.7,
        max_tokens: typeof body.max_tokens === 'number' ? body.max_tokens : 1024,
        stream: false,
        messages: sanitizedMessages,
      }),
    });

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      const message = data?.error?.message || 'Failed to generate response';
      return res.status(groqResponse.status).json({ error: message });
    }

    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
      return res.status(502).json({ error: 'Model returned an empty response' });
    }

    return res.status(200).json({ message: content });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Unexpected server error',
    });
  }
}
