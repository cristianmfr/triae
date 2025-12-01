import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { createUserSchema, userSchema } from '@/common/schemas/user-schemas'
import usersService from '@/services/users-service'

export const createUser: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/users',
    {
      schema: {
        tags: ['Users'],
        summary: 'Create a new user',
        body: createUserSchema,
        response: {
          201: z.object({
            user: userSchema,
          }),
        },
      },
    },
    async (request, reply) => {
      const user = await usersService.createUser(request.body)

      return reply.status(201).send({ user })
    },
  )
}
