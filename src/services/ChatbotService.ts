export type ChatRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

interface ChatResponse {
  message: string;
  error?: string;
}

export async function askChatbot(messages: ChatMessage[]): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages }),
  });

  const payload = (await response.json()) as ChatResponse;

  if (!response.ok) {
    throw new Error(payload.error || 'Erro ao consultar o LLM');
  }

  if (!payload.message) {
    throw new Error('Resposta vazia do LLM');
  }

  return payload.message;
}
