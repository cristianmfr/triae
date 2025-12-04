import { createRoute } from '@tanstack/react-router'
import { authRoute } from '../route'

import SignUp from './page'

export const registerRoute = createRoute({
  getParentRoute: () => authRoute,
  path: '/register',
  component: SignUp,
})
