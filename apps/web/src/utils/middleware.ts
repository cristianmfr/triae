import { redirect } from '@tanstack/react-router'
import { checkAuth } from '@/actions/auth/check-auth'

const publicRoutes = [
  {
    path: '/sign-in',
    redirect: true,
  },
]

async function isAuthenticated(): Promise<boolean> {
  const hasAuthUser = async () => {
    const response = await checkAuth()
    return response
  }

  if (typeof window === 'undefined') return false

  return await hasAuthUser()
}

export async function middleware(path: string) {
  const authenticated = await isAuthenticated()

  const publicRoute = publicRoutes.find((route) => route.path === path)
  const redirectWhenAuthenticated = publicRoute?.redirect

  if (authenticated && publicRoute && redirectWhenAuthenticated) {
    throw redirect({ to: '/' })
  }

  if (!authenticated && !publicRoute) {
    throw redirect({ to: '/sign-in' })
  }
}
