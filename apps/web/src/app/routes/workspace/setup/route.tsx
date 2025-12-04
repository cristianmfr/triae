import { createRoute, redirect } from '@tanstack/react-router'
import { getUserWorkspaces } from '@/app/actions/workspaces/get-user-workspaces'
import { workspaceRoute } from '../route'

import Setup from './page'

export const setupRoute = createRoute({
  getParentRoute: () => workspaceRoute,
  path: '/setup',
  component: Setup,
  beforeLoad: async () => {
    const hasWorkspaces = await getUserWorkspaces()
    if (hasWorkspaces) redirect({ to: '/' })
  },
})
