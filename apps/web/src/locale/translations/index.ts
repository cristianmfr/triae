import type { Locale } from '../types'
import en from './en'
import ptBR from './pt-BR'

export const translations: Record<Locale, typeof en> = {
	en,
	'pt-BR': ptBR,
}
