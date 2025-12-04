import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import {
  CreateUserInputSchema,
  CreateUserResponseSchema,
} from '@/schemas/users-schemas'
import usersService from '@/services/users-service'

export const createUser: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/users',
    schema: {
      tags: ['Users'],
      summary: 'Create a new user',
      body: CreateUserInputSchema,
      response: {
        201: CreateUserResponseSchema,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const createdUser = await usersService.createUser(request.body)
      return reply.send({ createdUser })
    },
  })
}
