import { createFileRoute } from '@tanstack/react-router'
import Auth from '@/app/pages/auth'

export const Route = createFileRoute('/(auth)/')({
  component: AuthRoute,
})

function AuthRoute() {
  return <Auth />
}
