import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/app/router'
import { AuthLayout } from '@/components/layouts/auth-layout'
import SignIn from './page'

export const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sign-in',
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  )
}
