import { api } from '../api-client'
import { UserCredentialsInput } from '../mocks/auth-mocks'

export async function SignInWithEmail(body: UserCredentialsInput) {
  await api.post('auth/sign-in/credentials', {
    json: {
      email: body.email,
      password: body.password,
    },
  })
}
