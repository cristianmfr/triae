import { CreateWorkspaceInput, Workspace } from '@/types/models/workspace'
import { apiClient } from '@/utils/api-client'

interface Reponse {
  workspace: Workspace
}

export async function createUserWorkspace(body: CreateWorkspaceInput) {
  const response = await apiClient
    .post('workspaces', {
      json: {
        name: body.name,
        slug: body.slug,
        description: body.description,
      },
    })
    .json<Reponse>()

  return response.workspace
}
