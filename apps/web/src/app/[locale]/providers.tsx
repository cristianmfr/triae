'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { I18nProviderClient } from '@/lib/i18n/i18n-client'
import { queryClient } from '@/lib/react-query/query-client'

interface ProviderProps {
  locale: string
  children: React.ReactNode
}

export function Providers({ children, locale }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProviderClient locale={locale}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </I18nProviderClient>
    </QueryClientProvider>
  )
}
