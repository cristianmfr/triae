import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'
import { middleware } from '@/utils/middleware'
import { signInRoute } from './auth/sign-in/route'
import { signUpRoute } from './auth/sign-up/route'
import { inboxRoute } from './workspace/inbox/route'
import { workspaceRoute } from './workspace/route'
import { setupRoute } from './workspace/setup/route'

export const rootRoute = createRootRoute({
  component: Outlet,
  beforeLoad: ({ location }) => {
    return middleware(location.pathname)
  },
})

const authRoutes = [signInRoute, signUpRoute]

const inboxRoutes = [inboxRoute]
const setupRoutes = [setupRoute]

const routeTree = rootRoute.addChildren([
  ...authRoutes,
  workspaceRoute.addChildren([...inboxRoutes, ...setupRoutes]),
])

const router = createRouter({ routeTree })

export { router }
