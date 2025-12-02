import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { CredentialsSchema } from './auth.schema'
import authService from './auth.service'

export const authRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/auth/sign-in/credentials',
    schema: {
      tags: ['Auth'],
      summary: 'Sign in with user credentials',
      body: CredentialsSchema,
      response: {
        204: z.null(),
      },
    },
    handler: async (request, reply) => {
      const { email, password } = request.body

      const session = await authService.createSession({
        email,
        password,
      })

      reply.setCookie('triae_session_token', session, {
        httpOnly: true,
        path: '/',
        secure: true,
      })

      return reply.code(204).send(null)
    },
  })
}
