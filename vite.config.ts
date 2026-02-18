import { defineConfig, loadEnv, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DEFAULT_MODEL = 'openai/gpt-oss-120b';

function normalizeEnvValue(value?: string) {
  if (!value) return '';
  return value.trim().replace(/^['"]|['"]$/g, '');
}

function getApiKey(env: Record<string, string>) {
  const key =
    env.NEXT_PRIVATE_GROQ_API ||
    env.GROQ_API_KEY ||
    env.VITE_GROQ_API_KEY ||
    process.env.NEXT_PRIVATE_GROQ_API ||
    process.env.GROQ_API_KEY ||
    process.env.VITE_GROQ_API_KEY;

  return normalizeEnvValue(key);
}

function sendJson(res: any, status: number, payload: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

function devChatApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'dev-chat-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/chat')) {
          return next();
        }

        if (req.method !== 'POST') {
          return sendJson(res, 405, { error: 'Method not allowed' });
        }

        const apiKey = getApiKey(env);
        if (!apiKey) {
          return sendJson(res, 500, { error: 'Groq API key not configured on server' });
        }

        const chunks: Buffer[] = [];
        req.on('data', (chunk) => chunks.push(chunk));

        req.on('end', async () => {
          try {
            const rawBody = Buffer.concat(chunks).toString('utf-8');
            const body = rawBody ? JSON.parse(rawBody) : {};
            const messages = Array.isArray(body.messages) ? body.messages : [];

            if (!messages.length) {
              return sendJson(res, 400, { error: 'messages is required' });
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
                messages: messages.slice(-20),
              }),
            });

            const data = (await groqResponse.json()) as any;
            if (!groqResponse.ok) {
              const message = data?.error?.message || 'Failed to generate response';
              return sendJson(res, groqResponse.status, { error: message });
            }

            const content = data?.choices?.[0]?.message?.content;
            if (typeof content !== 'string' || !content.trim()) {
              return sendJson(res, 502, { error: 'Model returned an empty response' });
            }

            return sendJson(res, 200, { message: content });
          } catch (error) {
            return sendJson(res, 500, {
              error: error instanceof Error ? error.message : 'Unexpected server error',
            });
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [vue(), devChatApiPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});
