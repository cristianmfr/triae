import { createContext, useCallback, useMemo, useState } from 'react'
import { translations } from '@/locale/translations'
import type {
  I18nContextValue,
  Locale,
  TranslationKey,
  TranslationParams,
} from '@/locale/types'

const STORAGE_KEY = 'app-locale'

function getInitialLocale(defaultLocale: Locale): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && stored in translations) return stored

  const browserLang = navigator.language
  if (browserLang.startsWith('pt')) return 'en'

  return defaultLocale
}

function interpolate(text: string, params?: TranslationParams): string {
  if (!params) return text

  return text.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return params[key]?.toString() ?? `{{${key}}}`
  })
}

export const I18nContext = createContext<I18nContextValue | null>(null)

interface I18nProviderProps {
  children: React.ReactNode
  defaultLocale?: Locale
}

export function I18nProvider({
  children,
  defaultLocale = 'en',
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    getInitialLocale(defaultLocale),
  )

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams): string => {
      const translation = translations[locale][key]
      if (!translation) {
        console.warn(`[i18n] Missing translation for key: ${key}`)
        return key
      }
      return interpolate(translation, params)
    },
    [locale],
  )

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t,
      setLocale,
    }),
    [locale, t, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
