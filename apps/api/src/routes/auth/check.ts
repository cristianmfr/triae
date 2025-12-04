import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { HasSessionResponse } from '@/schemas/auth-schemas'

export const check: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/auth/check',
    schema: {
      tags: ['Auth'],
      summary: 'Get user authentication status',
      response: {
        200: HasSessionResponse,
      },
    },
    handler: async (request, reply) => {
      const session = request.cookies.triae_session_token

      return reply.code(200).send({ authenticated: !!session })
    },
  })
}
