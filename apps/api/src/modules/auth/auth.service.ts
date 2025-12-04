import { UnauthorizedError } from '@/common/errors/unauthorized.error'
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
  private readonly TOKEN_EXP_TIME = 60 * 15

  private getCurrentTimestamp(): number {
    return Math.floor(Date.now() / 1000)
  }

  private createSessionPayload(
    user: {
      id: string
      email: string
      username: string
      name?: string
      createdAt: Date
    },
    sessionToken: string,
    currentDate: number,
    expirationDate: number,
  ) {
    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        createdAt: user.createdAt,
      },
      session: {
        token: sessionToken,
        userId: user.id,
        expiresAt: expirationDate,
        createdAt: currentDate,
      },
    }
  }

  private createRefreshPayload(token: string, expiresAt: number): RefreshToken {
    return { token, expiresAt }
  }

  private async saveSessionToRedis(
    userId: string,
    sessionToken: string,
    sessionPayload: SessionData,
    refreshTokensArray: RefreshToken[],
    ttl: number,
  ) {
    await redis.set(
      `session:${userId}`,
      JSON.stringify(refreshTokensArray),
      'EX',
      ttl,
    )

    await redis.set(sessionToken, JSON.stringify(sessionPayload), 'EX', ttl)
  }

  private async getRefreshTokens(userId: string): Promise<RefreshToken[]> {
    const refreshTokens = await redis.get(`session:${userId}`)

    if (!refreshTokens) throw new UnauthorizedError()

    return JSON.parse(refreshTokens)
  }

  private async clearExistingSessions(userId: string) {
    const existingTokens = await redis.get(`session:${userId}`)

    if (existingTokens) {
      const tokens: RefreshToken[] = JSON.parse(existingTokens)

      await Promise.all(tokens.map((rt) => redis.del(rt.token)))
      await redis.del(`session:${userId}`)
    }
  }

  async createSession({ email, password }: CredentialsInput) {
    const user = await usersService.findUniqueUserByEmail(email)

    if (!user.password)
      throw new UnauthorizedError('Method not enabled for this account.')

    const validatePassword = await comparePasswords(password, user.password)

    if (!validatePassword) throw new UnauthorizedError('Invalid password.')

    await this.clearExistingSessions(user.id)

    const currentDate = this.getCurrentTimestamp()
    const expirationDate = currentDate + this.TOKEN_EXP_TIME

    const sessionToken = createSessionToken({
      userId: user.id,
      expiresIn: this.TOKEN_EXP_TIME,
    })

    const sessionPayload = this.createSessionPayload(
      user,
      sessionToken,
      currentDate,
      expirationDate,
    )

    const refreshPayload = this.createRefreshPayload(
      sessionToken,
      expirationDate,
    )

    await this.saveSessionToRedis(
      user.id,
      sessionToken,
      sessionPayload,
      [refreshPayload],
      currentDate + this.SESSION_EXP_TTL,
    )

    return sessionToken
  }

  async validateSession(token: string) {
    const session = await redis.get(token)

    if (!session) throw new UnauthorizedError()

    const sessionData: SessionData = JSON.parse(session)
    const refreshTokensArray = await this.getRefreshTokens(
      sessionData.session.userId,
    )
    const currentToken = refreshTokensArray.find((rt) => rt.token === token)

    if (!currentToken) throw new UnauthorizedError()

    return { currentToken, sessionData }
  }

  async refreshSession(token: string) {
    const session = await redis.get(token)

    if (!session) throw new UnauthorizedError()

    const sessionData: SessionData = JSON.parse(session)
    const refreshTokensArray = await this.getRefreshTokens(
      sessionData.session.userId,
    )

    const currentDate = this.getCurrentTimestamp()
    const expirationDate = currentDate + this.TOKEN_EXP_TIME

    const sessionToken = createSessionToken({
      userId: sessionData.user.id,
      expiresIn: expirationDate,
    })

    const sessionPayload = this.createSessionPayload(
      sessionData.user,
      sessionToken,
      currentDate,
      currentDate + this.SESSION_EXP_TTL,
    )

    const refreshPayload = this.createRefreshPayload(
      sessionToken,
      expirationDate,
    )

    refreshTokensArray.push(refreshPayload)

    await redis.del(sessionData.session.token)

    await this.saveSessionToRedis(
      sessionData.user.id,
      sessionToken,
      sessionPayload,
      refreshTokensArray,
      currentDate + this.SESSION_EXP_TTL,
    )

    return sessionToken
  }
}

export default new AuthService()
