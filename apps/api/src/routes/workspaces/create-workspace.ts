import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import {
  CreateWorkspaceInputSchema,
  CreateWorkspaceResponseSchema,
} from '@/schemas/workspaces-schemas'
import { UnauthorizedError } from '@/server/errors/unauthorized-error'
import workspacesService from '@/services/workspaces-service'

export const createWorkspace: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/workspaces',
    schema: {
      tags: ['Workspaces'],
      summary: 'Create a new workspace',
      body: CreateWorkspaceInputSchema,
      response: {
        201: CreateWorkspaceResponseSchema,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id

      if (!userId) throw new UnauthorizedError()

      const createdWorkspace = await workspacesService.createWorkspace(
        userId,
        request.body,
      )
      return reply.send({ createdWorkspace })
    },
  })
}
