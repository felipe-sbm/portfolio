import { inject, computed } from 'vue'
import i18nData from '.'
import type { Locale, I18nData } from './types'
import enIcon from '@/assets/svg/en/main.svg'
import ptIcon from '@/assets/svg/pt/main.svg'
import jpIcon from '@/assets/svg/jp/main.svg'
import chIcon from '@/assets/svg/ch/main.svg'

// Map icons per locale
const icons: Record<Locale, string> = {
  en: enIcon,
  pt: ptIcon,
  jp: jpIcon,
  ch: chIcon
}

export function useI18n() {
  const locale = inject('locale') as { value: Locale } | undefined
  const toggleLocale = inject('toggleLocale') as (() => void) | undefined

  const current = computed<I18nData>(() => {
    const key = (locale?.value ?? 'en') as Locale
    return (i18nData as any)[key]
  })

  const heroIcon = computed(() => {
    const key = (locale?.value ?? 'en') as Locale
    return icons[key] ?? icons.en
  })

  return {
    locale,
    toggleLocale,
    texts: current,
    heroIcon
  }
}
