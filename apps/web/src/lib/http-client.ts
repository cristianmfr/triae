import { env } from '@triae/env'
// biome-ignore lint/style/useImportType: asd
import { CookiesFn, getCookie } from 'cookies-next'
import ky from 'ky'

export const httpClient = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      async (request) => {
        let cookieStore: CookiesFn | undefined

        if (typeof window === 'undefined') {
          const { cookies: serverCookies } = await import('next/headers')

          cookieStore = serverCookies
        }

        const token = await getCookie('triae_session_token', {
          cookies: cookieStore,
        })

        if (token) {
          request.headers.set('Cookie', `triae_session_token=${token}`)
        }
      },
    ],
  },
})
