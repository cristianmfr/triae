import { redirect } from '@tanstack/react-router'
import { getUserWorkspaces } from '@/app/actions/workspaces/get-user-workspaces'

const setupRoutes = [
  {
    path: '/setup',
    redirect: true,
  },
]

async function hasCreatedWorkspaces(): Promise<boolean> {
  const hasAuthUser = async () => {
    const workspaces = await getUserWorkspaces()
    const hasWorkspaces = workspaces && workspaces.length > 0

    return hasWorkspaces
  }

  if (typeof window === 'undefined') return false

  return await hasAuthUser()
}

export async function workspaceMiddleware(path: string) {
  const hasWorkspaces = await hasCreatedWorkspaces()

  const publicRoute = setupRoutes.find((route) => route.path === path)
  const redirectWhenUserHasWorkspaces = publicRoute?.redirect

  if (hasWorkspaces && publicRoute && redirectWhenUserHasWorkspaces) {
    throw redirect({ to: '/' })
  }

  if (!hasWorkspaces && !publicRoute) {
    throw redirect({ to: '/setup' })
  }
}
