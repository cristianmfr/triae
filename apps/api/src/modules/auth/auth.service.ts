import { UnauthorizedError } from '@/common/errors/unauthorized-error'
import {
  RefreshToken,
  SessionData,
} from '@/common/interfaces/session.interface'
import { comparePasswords } from '@/utils/hash'
import { redis } from '@/utils/redis'
import { createSessionToken } from '@/utils/session'
import usersService from '../users/users.service'
import { CredentialsInput } from './auth.schema'

class AuthService {
  private readonly SESSION_EXP_TTL = 60 * 60 * 24 * 7

  async createSession({ email, password }: CredentialsInput) {
    const user = await usersService.findUniqueUserByEmail(email)

    if (!user.password)
      throw new UnauthorizedError('Method not enabled for this account.')

    const validatePassword = await comparePasswords(password, user.password)

    if (!validatePassword) throw new UnauthorizedError('Invalid password.')

    const currentDate = Math.floor(Date.now() / 1000)
    const expirationDate = currentDate + 60 * 15

    const sessionToken = createSessionToken({
      userId: user.id,
      expiresIn: 60 * 15,
    })

    const sessionPayload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.profile?.name,
        createdAt: user.createdAt,
      },
      session: {
        token: sessionToken,
        userId: user.id,
        expiresAt: expirationDate,
        createdAt: currentDate,
      },
    }

    const refreshPayload: RefreshToken = {
      token: sessionToken,
      expiresAt: expirationDate,
    }

    await redis.set(
      `session:${user.id}`,
      JSON.stringify([refreshPayload]),
      'EX',
      currentDate + this.SESSION_EXP_TTL,
    )

    await redis.set(
      sessionToken,
      JSON.stringify(sessionPayload),
      'EX',
      currentDate + this.SESSION_EXP_TTL,
    )

    return sessionToken
  }

  async validateSession(token: string) {
    const session = await redis.get(token)

    if (!session) throw new UnauthorizedError()

    const sessionData: SessionData = JSON.parse(session)

    const refreshTokens = await redis.get(
      `session:${sessionData.session.userId}`,
    )

    if (!refreshTokens) throw new UnauthorizedError()

    const refreshTokensArray: RefreshToken[] = JSON.parse(refreshTokens)
    const currentToken = refreshTokensArray.find((rt) => rt.token === token)

    if (!currentToken) throw new UnauthorizedError()

    return { currentToken, sessionData }
  }

  async refreshSession(token: string) {
    const session = await redis.get(token)

    if (!session) throw new UnauthorizedError()

    const currentDate = Math.floor(Date.now() / 1000)

    const sessionData: SessionData = JSON.parse(session)

    const refreshTokens = await redis.get(
      `session:${sessionData.session.userId}`,
    )

    if (!refreshTokens) throw new UnauthorizedError()

    const refreshTokensArray: RefreshToken[] = JSON.parse(refreshTokens)

    const expirationDate = currentDate + 60 * 15

    const sessionToken = createSessionToken({
      userId: sessionData.user.id,
      expiresIn: expirationDate,
    })

    const sessionPayload = {
      user: {
        id: sessionData.user.id,
        email: sessionData.user.email,
        username: sessionData.user.username,
        name: sessionData.user.name,
        createdAt: sessionData.user.createdAt,
      },
      session: {
        token: sessionToken,
        userId: sessionData.user.id,
        expiresAt: currentDate + this.SESSION_EXP_TTL,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    }

    const refreshPayload: RefreshToken = {
      token: sessionToken,
      expiresAt: currentDate + 60 * 15,
    }

    refreshTokensArray.push(refreshPayload)

    await redis.set(
      `session:${sessionData.user.id}`,
      JSON.stringify(refreshTokensArray),
      'EX',
      currentDate + this.SESSION_EXP_TTL,
    )

    await redis.del(sessionData.session.token)

    await redis.set(
      sessionToken,
      JSON.stringify(sessionPayload),
      'EX',
      currentDate + this.SESSION_EXP_TTL,
    )

    return sessionToken
  }
}

export default new AuthService()
