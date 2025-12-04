import { User } from '@/types/models/user'
import { apiClient } from '@/utils/api-client'

interface CurrentUserResponse {
  user: User
}

export async function getCurrentUser() {
  const response = await apiClient
    .get('auth/user/profile')
    .json<CurrentUserResponse>()

  return response
}
