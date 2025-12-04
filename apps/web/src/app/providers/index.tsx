import { I18nProvider } from '@/app/providers/i18n-provider'
import { QueryClientProvider } from '@/app/providers/query-client-provider'
import { ThemeProvider } from '@/app/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import type { Locale } from '@/locale/types'

interface ProviderProps {
  locale: Locale
  children: React.ReactNode
}

export function Providers({ children, locale }: ProviderProps) {
  const lang = locale ? locale : ('en' as Locale)

  return (
    <I18nProvider defaultLocale={lang}>
      <QueryClientProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </QueryClientProvider>
    </I18nProvider>
  )
}
