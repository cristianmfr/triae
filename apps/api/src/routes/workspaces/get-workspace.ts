import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { IdParamsSchema } from '@/schemas/common-schemas'
import { WorkspaceSchema } from '@/schemas/workspaces-schemas'
import { UnauthorizedError } from '@/server/errors/unauthorized-error'
import workspacesService from '@/services/workspaces-service'

export const getWorkspace: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/workspaces/:value',
    schema: {
      tags: ['Workspaces'],
      summary: 'Get workspace by ID or slug',
      params: IdParamsSchema,
      response: {
        200: z.object({
          workspace: WorkspaceSchema,
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id
      const workspaceId = request.params.id

      if (!userId) throw new UnauthorizedError()

      const workspace = await workspacesService.findUniqueWorkspaceBySlug(
        userId,
        workspaceId,
      )

      return reply.send({ workspace })
    },
  })
}
