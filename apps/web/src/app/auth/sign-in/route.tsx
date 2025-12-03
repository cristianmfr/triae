import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/app/router'

import SignIn from './page'

export const signInRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-in',
	component: SignIn,
})
