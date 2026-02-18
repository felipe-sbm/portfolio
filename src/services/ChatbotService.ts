import { t } from '@/i18n';

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
    const fallback = t('chatbotService.queryError');
    throw new Error(payload.error || (typeof fallback === 'string' ? fallback : 'LLM request failed'));
  }

  if (!payload.message) {
    const fallback = t('chatbotService.emptyResponse');
    throw new Error(typeof fallback === 'string' ? fallback : 'Empty LLM response');
  }

  return payload.message;
}
