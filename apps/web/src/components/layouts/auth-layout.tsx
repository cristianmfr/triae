export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full min-h-screen bg-linear-to-b from-muted-foreground/13 to-background flex items-center justify-center">
      {children}
    </div>
  )
}
