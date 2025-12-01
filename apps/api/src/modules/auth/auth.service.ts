import { prisma } from '@triae/database/prisma'
import { NotFoundError } from '@/common/errors/not-found-error'
import { UnauthorizedError } from '@/common/errors/unauthorized-error'
import { comparePasswords } from '@/utils/hash'

class AuthService {
  async verifyCredentials(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    })

    if (!user) throw new NotFoundError()
    if (!user.password) throw new UnauthorizedError('Invalid password.')

    const validatePassword = await comparePasswords(password, user.password)

    if (!validatePassword) throw new UnauthorizedError('Invalid password.')

    return user
  }
}

export default new AuthService()
