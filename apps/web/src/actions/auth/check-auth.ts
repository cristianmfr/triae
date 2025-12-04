import { apiClient } from '@/utils/api-client'

interface Response {
  authenticated: boolean
}

export async function checkAuth() {
  try {
    const response = await apiClient.get('auth/check').json<Response>()
    return response.authenticated
  } catch {
    return false
  }
}
