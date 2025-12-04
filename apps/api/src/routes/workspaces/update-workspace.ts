import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { IdParamsSchema } from '@/schemas/common-schemas'
import {
  UpdateWorkspaceInputSchema,
  UpdateWorkspaceResponseSchema,
} from '@/schemas/workspaces-schemas'
import { UnauthorizedError } from '@/server/errors/unauthorized-error'
import workspacesService from '@/services/workspaces-service'

export const updateWorkspace: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/workspaces/:id',
    schema: {
      tags: ['Workspaces'],
      summary: 'Update a workspace',
      body: UpdateWorkspaceInputSchema,
      params: IdParamsSchema,
      response: {
        201: UpdateWorkspaceResponseSchema,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id
      const workspaceId = request.params.id

      if (!userId) throw new UnauthorizedError()

      const updatedWorkspace = await workspacesService.updateWorkspace(
        userId,
        workspaceId,
        request.body,
      )
      return reply.send({ updatedWorkspace })
    },
  })
}
