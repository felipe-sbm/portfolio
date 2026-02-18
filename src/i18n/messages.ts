import type { Locale, MessageTree } from './messages/types';
import { enMessages } from './messages/locales/en';
import { ptMessages } from './messages/locales/pt';
import { jaMessages } from './messages/locales/ja';
import { zhMessages } from './messages/locales/zh';

export type { Locale, MessageTree };

export const localeOptions: Array<{ value: Locale; label: string }> = [
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
  { value: 'ja', label: '日本語' },
  { value: 'zh', label: '简体中文' },
];

export const localeToIntl: Record<Locale, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  ja: 'ja-JP',
  zh: 'zh-CN',
};

export const messages: Record<Locale, MessageTree> = {
  en: enMessages,
  pt: ptMessages,
  ja: jaMessages,
  zh: zhMessages,
};
