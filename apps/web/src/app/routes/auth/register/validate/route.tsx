import { createRoute } from '@tanstack/react-router'
import { authRoute } from '../../route'
import SignUp from './page'

export const validateRoute = createRoute({
  getParentRoute: () => authRoute,
  path: '/register/$token',
  component: SignUp,
  beforeLoad: async ({ params }) => {
    console.log(params.token)
  },
})
