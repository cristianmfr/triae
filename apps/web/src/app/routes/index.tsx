import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'
import { middleware } from '@/utils/middleware'
import { loginRoute } from './auth/login/route'
import { registerRoute } from './auth/register/route'
import { validateRoute } from './auth/register/validate/route'
import { authRoute } from './auth/route'
import { inboxRoute } from './workspace/inbox/route'
import { workspaceRoute } from './workspace/route'
import { setupRoute } from './workspace/setup/route'

export const rootRoute = createRootRoute({
  component: Outlet,
  beforeLoad: ({ location }) => {
    return middleware(location.pathname)
  },
})

const authenticationRoutes = [loginRoute]
const registrationRoutes = [registerRoute, validateRoute]

const inboxRoutes = [inboxRoute]
const setupRoutes = [setupRoute]

const routeTree = rootRoute.addChildren([
  authRoute.addChildren([...authenticationRoutes, ...registrationRoutes]),
  workspaceRoute.addChildren([...inboxRoutes, ...setupRoutes]),
])

const router = createRouter({ routeTree })

export { router }
