import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { userSchema } from '@/common/schemas/user-schemas'
import userService from '@/services/users-service'

export const getUser: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/users/:id',
    {
      schema: {
        tags: ['Users'],
        summary: 'Get user details from ID',
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: z.object({
            user: userSchema,
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const user = await userService.findUniqueUserById(request.params.id)

      if (!user) {
        return reply.code(404).send({ message: 'User not found.' })
      }

      return reply.send({ user })
    },
  )
}
