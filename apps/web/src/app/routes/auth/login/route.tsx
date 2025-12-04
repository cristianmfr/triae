import { createRoute } from '@tanstack/react-router'
import { authRoute } from '../route'

import Login from './page'

export const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: '/login',
  component: Login,
})
