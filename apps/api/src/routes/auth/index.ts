import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { check } from './check'
import { getAuthenticatedUser } from './get-authenticated-user'
import { loginWithEmail } from './login-with-email'

export const authRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.register(loginWithEmail)
  fastify.register(getAuthenticatedUser)
  fastify.register(check)
}
