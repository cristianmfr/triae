import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/app/router'

import Inbox from './page'

export const inboxRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Inbox,
})
