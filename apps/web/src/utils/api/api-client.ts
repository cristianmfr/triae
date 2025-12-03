import Cookies from 'js-cookie'
import ky from 'ky'

const apiClient = ky.create({
  prefixUrl: import.meta.env.VITE_PUBLIC_API_URL,
  credentials: 'include',
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = Cookies.get('triae_session_token')

        if (token) {
          request.headers.set('Cookie', `triae_session_token=${token}`)
        }
      },
    ],
  },
})

export { apiClient as api }
