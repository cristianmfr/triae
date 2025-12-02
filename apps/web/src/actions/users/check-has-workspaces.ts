import { httpClient } from '@/lib/http-client'

interface Reponse {
  has: boolean
}

export async function checkHasWorkspaces() {
  const response = await httpClient
    .get('users/workspaces/check')
    .json<Reponse>()

  return response.has
}
