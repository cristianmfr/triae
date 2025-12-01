import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { userSchema } from '@/common/schemas/user-schemas'
import userService from '@/services/users-service'

export const getUsers: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Get all users',
        response: {
          200: z.object({
            users: z.array(userSchema),
          }),
        },
      },
    },
    async (_request, reply) => {
      const users = await userService.findManyUsers()

      return reply.send({ users })
    },
  )
}
