import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import { Providers } from './providers'

const fontSans = Red_Hat_Display({
  variable: '--font-sans',
  style: 'normal',
})

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
      className={`${fontSans.className} antialiased`}
    >
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  )
}
