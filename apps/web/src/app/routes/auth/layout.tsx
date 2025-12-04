import { Outlet } from '@tanstack/react-router'

export function AuthLayout() {
  return (
    <div className="mx-auto w-full min-h-screen bg-linear-to-b from-muted-foreground/13 to-background flex items-center justify-center">
      <Outlet />
    </div>
  )
}
