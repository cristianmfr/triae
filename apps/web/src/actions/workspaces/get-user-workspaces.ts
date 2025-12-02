import { httpClient } from '@/lib/http-client'

interface Workspace {
  id: string
  name: string
  slug: string
  description?: string | null
  createdAt: Date
  updatedAt: Date
}

interface Response {
  workspaces: Workspace[]
}

export async function getUserWorkspaces() {
  const response = await httpClient.get('workspaces').json<Response>()

  return response.workspaces
}
