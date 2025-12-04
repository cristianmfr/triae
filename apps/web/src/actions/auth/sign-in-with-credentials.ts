import { apiClient } from '@/utils/api-client'

interface SignInRequest {
  email: string
  password: string
}

export async function signInWithCredentials(body: SignInRequest) {
  await apiClient.post('auth/sign-in/credentials', {
    json: {
      email: body.email,
      password: body.password,
    },
  })
}
