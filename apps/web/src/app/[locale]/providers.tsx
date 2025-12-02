'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { queryClient } from '@/lib/query-client'
import { I18nProviderClient } from '@/locale/client'

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
