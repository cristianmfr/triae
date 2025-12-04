import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { CredentialsInputSchema } from '@/schemas/auth-schemas'
import authService from '@/services/auth-service'

export const loginWithEmail: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/auth/login/email',
    schema: {
      tags: ['Auth'],
      summary: 'Authenticate with user credentials (email and password)',
      body: CredentialsInputSchema,
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
        secure: process.env.NODE_ENV === 'production',
      })

      return reply.code(204).send(null)
    },
  })
}
