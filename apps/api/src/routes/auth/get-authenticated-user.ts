import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { GetUserQueryResponse } from '@/schemas/users-schemas'
import { UnauthorizedError } from '@/server/errors/unauthorized-error'
import usersService from '@/services/users-service'

export const getAuthenticatedUser: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/auth/user/profile',
    schema: {
      tags: ['Auth'],
      summary: 'Get authenticated user profile details',
      response: {
        200: GetUserQueryResponse,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id

      if (!userId) throw new UnauthorizedError()

      return reply
        .code(200)
        .send({ user: await usersService.findUniqueUserById(userId) })
    },
  })
}
