import { prisma } from '@triae/database/prisma'
import { hash } from 'bcryptjs'
import { NotFoundError } from '@/common/errors/not-found.error'
import { CreateUserInput } from './users.schema'

class UserService {
  private readonly HASH_SALT_ROUNDS = 12

  async findManyUsers() {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
      },
    })

    return users
  }

  async findUniqueUserById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    })

    if (!user) throw new NotFoundError('User')

    return user
  }

  async findUniqueUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        profile: true,
      },
    })

    if (!user) throw new NotFoundError('User')

    return user
  }

  async createUser(input: CreateUserInput) {
    const addUserTransaction = await prisma.$transaction(async (tx) => {
      let passwordHashed = null

      if (input.password) {
        passwordHashed = await hash(input.password, this.HASH_SALT_ROUNDS)
      }

      const user = await tx.user.create({
        data: {
          email: input.email,
          password: passwordHashed,
          username: input.username,
          active: true,
          verified: true,
          profile: {
            create: {
              name: input.name,
              email: input.email,
              phone: input.phone,
              company: input.company,
              image: input.image,
            },
          },
        },
        include: {
          profile: true,
        },
      })

      return user
    })

    return addUserTransaction
  }

  async deleteUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    })

    if (!user) throw new NotFoundError()

    if (user.profile?.id) {
      await prisma.profile.delete({
        where: { id: user.profile.id },
      })
    }

    await prisma.user.delete({
      where: { id: user.id },
    })
  }
}

export default new UserService()
