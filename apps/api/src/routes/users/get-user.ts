import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { FindUniqueParamsSchema } from '@/schemas/common-schemas'
import { GetUserQueryResponse } from '@/schemas/users-schemas'
import usersService from '@/services/users-service'

export const getUser: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/users/:value',
    schema: {
      tags: ['Users'],
      summary: 'Get user by ID',
      params: FindUniqueParamsSchema,
      response: {
        200: GetUserQueryResponse,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const param = request.params.value
      const isEmail = param.includes('@')

      if (isEmail) {
        const user = await usersService.findUniqueUserByEmail(param)
        return reply.send({ user })
      }

      const user = await usersService.findUniqueUserById(param)
      return reply.send({ user })
    },
  })
}
