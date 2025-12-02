'use client'

import { useQuery } from '@tanstack/react-query'
import { getCookie, setCookie } from 'cookies-next'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { getUserWorkspaces } from '@/actions/workspaces/get-user-workspaces'
import WorkspaceSetup from '@/components/modules/workspace-setup'
import { Spinner } from '@/components/ui/spinner'

const COOKIE_NAME = 'has_workspaces'

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ['hasWorkspaces'],
    queryFn: async () => {
      return await getUserWorkspaces()
    },
  })

  useEffect(() => {
    if (data === undefined) return

    const hasWorkspaces = data && data.length > 0

    const currentCookie = getCookie(COOKIE_NAME)
    const currentValue = currentCookie === 'true'

    if (currentValue !== hasWorkspaces) {
      setCookie(COOKIE_NAME, String(data))
    }

    if (data) {
      redirect('/')
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 w-full h-screen items-center justify-center">
        <Spinner className="size-6" />
      </div>
    )
  }

  return <WorkspaceSetup />
}
