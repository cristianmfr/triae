import { createRoute, redirect } from '@tanstack/react-router'
import { getUserWorkspaces } from '@/actions/workspaces/get-user-workspaces'
import { workspaceRoute } from '../route'

import Inbox from './page'

export const inboxRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/',
  component: Inbox,
  beforeLoad: async () => {
    const hasWorkspaces = await getUserWorkspaces()
    if (!hasWorkspaces) redirect({ to: '/setup' })
  },
})
