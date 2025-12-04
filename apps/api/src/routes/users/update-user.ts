import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { IdParamsSchema } from '@/schemas/common-schemas'
import {
  UpdateUserInputSchema,
  UpdateUserResponseSchema,
} from '@/schemas/users-schemas'
import usersService from '@/services/users-service'

export const updateUser: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/users/:id',
    schema: {
      tags: ['Users'],
      summary: 'Create a new user',
      body: UpdateUserInputSchema,
      params: IdParamsSchema,
      response: {
        201: UpdateUserResponseSchema,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const updatedUser = await usersService.updateUser(
        request.params.id,
        request.body,
      )
      return reply.send({ updatedUser })
    },
  })
}
