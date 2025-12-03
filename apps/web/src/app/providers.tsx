import { I18nProvider } from '@/components/providers/i18n-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { type Locale } from '@/locale/types'

interface ProviderProps {
	locale: Locale
	children: React.ReactNode
}

export function Providers({ children, locale }: ProviderProps) {
	const lang = locale ? locale : ('en' as Locale)

	return (
		<I18nProvider defaultLocale={lang}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				{children}
				<Toaster richColors position="bottom-right" />
			</ThemeProvider>
		</I18nProvider>
	)
}
