import { httpClient } from '@/lib/http-client'

export async function signIn({
  email,
  password,
}: {
  email: string
  password: string
}) {
  await httpClient.post('auth/sign-in/credentials', {
    json: {
      email,
      password,
    },
  })
}
