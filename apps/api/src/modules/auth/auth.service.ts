import { UnauthorizedError } from '@/common/errors/unauthorized-error'
import { comparePasswords } from '@/utils/hash'
import { redis } from '@/utils/redis'
import { createSessionToken } from '@/utils/session'
import usersService from '../users/users.service'
import { CredentialsInput } from './auth.schema'

class AuthService {
  private readonly SESSION_EXP_TTL =
    Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7

  async createSession({ email, password }: CredentialsInput) {
    const user = await usersService.findUniqueUserByEmail(email)

    if (!user.password)
      throw new UnauthorizedError('Method not enabled for this account.')

    const validatePassword = await comparePasswords(password, user.password)

    if (!validatePassword) throw new UnauthorizedError('Invalid password.')

    const currentDate = Math.floor(Date.now())
    const expirationDate = currentDate + 60 * 15

    const sessionToken = createSessionToken({
      userId: user.id,
      expiresIn: expirationDate,
    })

    const sessionPayload = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.profile?.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      session: {
        token: sessionToken,
        userId: user.id,
        expiresAt: this.SESSION_EXP_TTL,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    }

    const refreshPayload = {
      token: sessionToken,
      expiresAt: currentDate + 60 * 15,
    }

    await redis.set(
      `session:${user.id}`,
      JSON.stringify(refreshPayload),
      'EX',
      this.SESSION_EXP_TTL,
    )

    await redis.set(
      sessionToken,
      JSON.stringify(sessionPayload),
      'EX',
      this.SESSION_EXP_TTL,
    )

    return sessionToken
  }
}

export default new AuthService()
