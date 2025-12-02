import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import authService from '@/modules/auth/auth.service'
import { UnauthorizedError } from '../errors/unauthorized-error'

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>
  }
}

export const auth = fp(async (fastify: FastifyInstance) => {
  fastify.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const token = request.cookies.triae_session_token
      const currentDate = Math.floor(Date.now() / 1000)

      if (!token) throw new UnauthorizedError()

      const currentSession = await authService.validateSession(token)

      if (currentDate > currentSession.expiresAt) {
        const refreshToken = await authService.refreshSession(token)

        reply.setCookie('triae_session_token', refreshToken, {
          httpOnly: true,
          path: '/',
          secure: true,
        })
      }
    },
  )
})
