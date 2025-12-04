import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import authService from '@/services/auth-service'
import { UnauthorizedError } from '../errors/unauthorized-error'
import { SessionData } from '../interfaces/session-interface'

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<SessionData>
  }
  interface FastifyRequest {
    session: SessionData | null
  }
}

export const auth = fp(async (fastify: FastifyInstance) => {
  fastify.decorateRequest('session', null)

  fastify.decorate(
    'authenticate',
    async (request: FastifyRequest, reply: FastifyReply) => {
      const token = request.cookies.triae_session_token
      const currentDate = Math.floor(Date.now() / 1000)

      if (!token) throw new UnauthorizedError()

      const currentSession = await authService.validateSession(token)

      if (currentDate > currentSession.currentToken.expiresAt) {
        const refreshToken = await authService.refreshSession(token)

        reply.setCookie('triae_session_token', refreshToken, {
          httpOnly: true,
          path: '/',
          secure: true,
        })
      }

      request.session = currentSession.sessionData
      return currentSession.sessionData
    },
  )
})
