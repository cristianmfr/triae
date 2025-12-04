import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/app/routes'
import { AuthLayout } from './layout'

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'authPathlessLayout',
  component: AuthLayout,
})
