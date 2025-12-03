import { Toaster } from '@/components/ui/toaster'
import { I18nProviderClient } from '@/locale/client'
import { ThemeProvider } from './theme-provider'

interface ProviderProps {
  locale: string
  children: React.ReactNode
}

export function Providers({ children, locale }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {children}
        <Toaster richColors position="bottom-right" />
      </ThemeProvider>
    </I18nProviderClient>
  )
}
