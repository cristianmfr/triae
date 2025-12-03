import type { TranslationKey } from './translations/en'

export type Locale = 'en' | 'pt-BR'

export type TranslationParams = Record<string, string | number>

export interface I18nContextValue {
	locale: Locale
	t: (key: TranslationKey, params?: TranslationParams) => string
	setLocale: (locale: Locale) => void
}

export type { TranslationKey }
