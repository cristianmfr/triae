import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { UnauthorizedError } from '@/common/errors/unauthorized.error'
import { UserSchema } from '../users/users.schema'
import usersService from '../users/users.service'
import { CredentialsSchema } from './auth.schema'
import authService from './auth.service'

export const authRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/auth/sign-in/credentials',
    schema: {
      tags: ['Auth'],
      summary: 'Authenticate with user credentials (email and password)',
      body: CredentialsSchema,
      response: {
        204: z.null(),
      },
    },
    handler: async (request, reply) => {
      const { email, password } = request.body

      const session = await authService.createSession({
        email,
        password,
      })

      reply.setCookie('triae_session_token', session, {
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      })

      return reply.code(204).send(null)
    },
  })

  fastify.route({
    method: 'GET',
    url: '/auth/user/profile',
    schema: {
      tags: ['Auth'],
      summary: 'Get authenticated user profile details',
      response: {
        200: z.object({
          user: UserSchema,
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id

      if (!userId) throw new UnauthorizedError()

      return reply
        .code(200)
        .send({ user: await usersService.findUniqueUserById(userId) })
    },
  })

  fastify.route({
    method: 'GET',
    url: '/auth/check',
    schema: {
      tags: ['Auth'],
      summary: 'Get user authentication status',
      response: {
        200: z.object({
          authenticated: z.boolean(),
        }),
      },
    },
    handler: async (request, reply) => {
      const session = request.cookies.triae_session_token

      return reply.code(200).send({ authenticated: !!session })
    },
  })
}
