import { AuthLayout } from '@/components/modules/auth/auth-layout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>
}
