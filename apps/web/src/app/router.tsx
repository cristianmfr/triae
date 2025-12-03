import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'

import { signInRoute } from './auth/sign-in/route'
import { signUpRoute } from './auth/sign-up/route'
import { inboxRoute } from './inbox/route'

export const rootRoute = createRootRoute({
	component: Outlet,
})

const authRoutes = [signInRoute, signUpRoute]
const inboxRoutes = [inboxRoute]

const routeTree = rootRoute.addChildren([...authRoutes, ...inboxRoutes])

const router = createRouter({ routeTree })

export { router }
