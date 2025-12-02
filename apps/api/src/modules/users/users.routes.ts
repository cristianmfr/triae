import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { UnauthorizedError } from '@/common/errors/unauthorized.error'
import { CreateUserSchema, UserSchema } from './users.schema'
import usersService from './users.service'

export const usersRoutes: FastifyPluginAsyncZod = async (fastify) => {
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
      summary: 'Get user by ID',
      params: z.object({
        id: z.string(),
      }),
      response: {
        200: z.object({
          user: UserSchema,
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
      summary: 'Creates a new user',
      body: CreateUserSchema,
      response: {
        200: UserSchema,
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
      summary: 'Delete user by ID',
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

  fastify.route({
    method: 'GET',
    url: '/users/workspaces/check',
    schema: {
      tags: ['Users'],
      summary: 'Checks if the user has active workspaces',
      response: {
        200: z.object({
          has: z.boolean(),
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id

      if (!userId) throw new UnauthorizedError()

      const hasWorkspaces = await usersService.hasUserWorkspaces(userId)

      return reply.code(200).send({ has: hasWorkspaces })
    },
  })

  // fastify.route({
  //   method: 'GET',
  //   url: '/users/workspaces/check',
  //   schema: {
  //     tags: ['Users'],
  //     summary: 'Checks if the user has active workspaces',
  //     response: {
  //       204: z.null(),
  //     },
  //   },
  //   preHandler: [fastify.authenticate],
  //   handler: async (request, reply) => {
  //     const userId = request.session?.user.id

  //     if (!userId) throw new UnauthorizedError()

  //     const hasWorkspaces = await usersService.hasUserWorkspaces(userId)
  //     const cookieData = hasWorkspaces ? 'true' : 'false'

  //     return reply.code(204).send(null)
  //   },
  // })
}
