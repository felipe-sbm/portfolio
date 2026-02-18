import { readonly, ref } from 'vue';
import { localeOptions, localeToIntl, messages, type Locale, type MessageTree } from './messages';

const STORAGE_KEY = 'portfolio:locale';
const DEFAULT_LOCALE: Locale = 'pt';

function normalizeLocale(value?: string | null): Locale {
  if (!value) return DEFAULT_LOCALE;

  const normalized = value.toLowerCase();

  if (normalized.startsWith('pt')) return 'pt';
  if (normalized.startsWith('ja')) return 'ja';
  if (normalized.startsWith('zh')) return 'zh';
  if (normalized.startsWith('en')) return 'en';

  return DEFAULT_LOCALE;
}

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  const savedRaw = window.localStorage.getItem(STORAGE_KEY);
  if (savedRaw) return normalizeLocale(savedRaw);

  return normalizeLocale(window.navigator.language);
}

const activeLocale = ref<Locale>(detectInitialLocale());

function applyDocumentLang(locale: Locale) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = localeToIntl[locale];
}

applyDocumentLang(activeLocale.value);

function getByPath(source: MessageTree, path: string): unknown {
  return path.split('.').reduce<unknown>((current, key) => {
    if (!current || typeof current !== 'object') return undefined;
    return (current as MessageTree)[key];
  }, source);
}

function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;

  return Object.entries(params).reduce((result, [key, value]) => {
    return result.split(`{${key}}`).join(String(value));
  }, template);
}

export function t(path: string, params?: Record<string, string | number>): string | string[] {
  const localizedValue = getByPath(messages[activeLocale.value], path);
  const fallbackValue = getByPath(messages[DEFAULT_LOCALE], path);
  const value = localizedValue ?? fallbackValue;

  if (Array.isArray(value)) return value;
  if (typeof value === 'string') return interpolate(value, params);
  return path;
}

export function setLocale(locale: Locale): void {
  activeLocale.value = locale;
  applyDocumentLang(locale);

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }
}

export function getIntlLocale(): string {
  return localeToIntl[activeLocale.value];
}

export function useI18n() {
  return {
    t,
    setLocale,
    locale: activeLocale,
    readonlyLocale: readonly(activeLocale),
    localeOptions,
    getIntlLocale,
  };
}

export type { Locale };
