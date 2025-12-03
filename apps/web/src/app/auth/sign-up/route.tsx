import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/app/router'

import SignUp from './page'

export const signUpRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/sign-up',
	component: SignUp,
})
