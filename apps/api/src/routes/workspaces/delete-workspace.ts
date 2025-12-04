import { FastifyError } from 'fastify'
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import {
  IdParamsSchema,
  OperationResponseSchema,
} from '@/schemas/common-schemas'
import { UnauthorizedError } from '@/server/errors/unauthorized-error'
import workspacesService from '@/services/workspaces-service'

export const deleteWorkspace: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'DELETE',
    url: '/workspaces/:id',
    schema: {
      tags: ['Workspaces'],
      summary: 'Delete workspace by ID',
      params: IdParamsSchema,
      response: {
        200: OperationResponseSchema,
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id
      const workspaceId = request.params.id

      if (!userId) throw new UnauthorizedError()

      try {
        await workspacesService.deleteWorkspace(userId, workspaceId)
        return reply.send({
          success: true,
          message: 'Workspace deleted successfully!',
        })
      } catch (err) {
        const error = err as FastifyError
        return reply.send({ success: false, message: error.message })
      }
    },
  })
}
