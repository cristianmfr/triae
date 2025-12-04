import { Workspace } from '@/types/models/workspace'
import { apiClient } from '@/utils/api-client'

interface Response {
  workspaces: Workspace[]
}

export async function getUserWorkspaces() {
  const response = await apiClient.get('workspaces').json<Response>()
  return response.workspaces
}
