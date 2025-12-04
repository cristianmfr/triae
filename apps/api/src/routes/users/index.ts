import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createUser } from './create-user'
import { deleteUser } from './delete-user'
import { fetchUsers } from './fetch-users'
import { getUser } from './get-user'
import { updateUser } from './update-user'

export const usersRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.register(fetchUsers)
  fastify.register(getUser)
  fastify.register(createUser)
  fastify.register(updateUser)
  fastify.register(deleteUser)
}
