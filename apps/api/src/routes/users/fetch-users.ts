import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { UserSchema } from '@/schemas/users-schemas'
import usersService from '@/services/users-service'

export const fetchUsers: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/users',
    schema: {
      tags: ['Users'],
      summary: 'Fetch all registered users',
      response: {
        200: z.object({
          users: z.array(UserSchema),
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (_request, reply) => {
      const users = await usersService.findManyUsers()
      return reply.send({ users })
    },
  })
}
