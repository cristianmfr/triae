import { httpClient } from '@/lib/http-client'

interface WorkspaceCreateInput {
  name: string
  slug: string
  description?: string
}

interface Workspace {
  id: string
  name: string
  slug: string
  description?: string | null
  createdAt: Date
  updatedAt: Date
}

interface Reponse {
  workspace: Workspace
}

export async function createUserWorkspace(input: WorkspaceCreateInput) {
  const response = await httpClient
    .post('workspaces', {
      json: {
        ...input,
      },
    })
    .json<Reponse>()

  return response.workspace
}
