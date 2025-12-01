import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import userService from '@/services/users-service'

export const deleteUser: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    '/users/:id',
    {
      schema: {
        tags: ['Users'],
        summary: 'Delete a user',
        params: z.object({
          id: z.string(),
        }),
        response: {
          204: z.null,
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const user = await userService.deleteUser(request.params.id)

      if (!user) {
        return reply.code(404).send({ message: 'User not found.' })
      }

      return reply.code(204).send(null)
    },
  )
}
