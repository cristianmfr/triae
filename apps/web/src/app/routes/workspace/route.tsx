import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/app/routes'
import { workspaceMiddleware } from '@/utils/workspace-middleware'

export const workspaceRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'pathlessProxy',
  beforeLoad: ({ location }) => {
    return workspaceMiddleware(location.pathname)
  },
})
