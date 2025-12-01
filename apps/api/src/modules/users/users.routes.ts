import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { createUserSchema, userSchema } from './users.schema'
import usersService from './users.service'

export const usersRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/users',
    schema: {
      tags: ['Users'],
      summary: 'Get all users',
      response: {
        200: z.object({
          users: z.array(userSchema),
        }),
      },
    },
    handler: async (_request, reply) => {
      const users = await usersService.findManyUsers()
      return reply.send({ users })
    },
  })

  fastify.route({
    method: 'GET',
    url: '/users/:id',
    schema: {
      tags: ['Users'],
      summary: 'Find a user with ID',
      params: z.object({
        id: z.string(),
      }),
      response: {
        200: z.object({
          user: userSchema,
        }),
      },
    },
    handler: async (request, reply) => {
      const user = await usersService.findUniqueUserById(request.params.id)

      return reply.send({ user })
    },
  })

  fastify.route({
    method: 'POST',
    url: '/users',
    schema: {
      tags: ['Users'],
      summary: 'Create a new user',
      body: createUserSchema,
      response: {
        200: userSchema,
      },
    },
    handler: async (request, reply) => {
      const user = await usersService.createUser(request.body)
      return reply.send(user)
    },
  })

  fastify.route({
    method: 'DELETE',
    url: '/users/:id',
    schema: {
      tags: ['Users'],
      summary: 'Delete a user',
      params: z.object({
        id: z.string(),
      }),
      response: {
        204: z.null(),
      },
    },
    handler: async (request, reply) => {
      await usersService.deleteUser(request.params.id)

      return reply.send(null)
    },
  })
}
