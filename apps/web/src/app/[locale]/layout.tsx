import '@/styles/globals.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Triae',
    default: 'Triae',
  },
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>
  children: React.ReactNode
}>) {
  const { locale } = await params

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  )
}
