import { FastifyError } from 'fastify'
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import {
  IdParamsSchema,
  OperationResponseSchema,
} from '@/schemas/common-schemas'
import usersService from '@/services/users-service'

export const deleteUser: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'DELETE',
    url: '/users/:id',
    schema: {
      tags: ['Users'],
      summary: 'Delete user by ID',
      params: IdParamsSchema,
      response: {
        200: OperationResponseSchema,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      try {
        await usersService.deleteUser(request.params.id)
        return reply.send({
          success: true,
          message: 'User deleted successfully!',
        })
      } catch (err) {
        const error = err as FastifyError
        return reply.send({ success: false, message: error.message })
      }
    },
  })
}
