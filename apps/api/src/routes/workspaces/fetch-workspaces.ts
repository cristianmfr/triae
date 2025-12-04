import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { WorkspaceSchema } from '@/schemas/workspaces-schemas'
import { UnauthorizedError } from '@/server/errors/unauthorized-error'
import workspacesService from '@/services/workspaces-service'

export const fetchWorkspaces: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/workspaces',
    schema: {
      tags: ['Workspaces'],
      summary: 'Fetch all user workspaces',
      response: {
        200: z.object({
          workspaces: z.array(WorkspaceSchema),
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id

      if (!userId) throw new UnauthorizedError()

      const workspaces = await workspacesService.findManyWorkspaces(userId)

      return reply.send({ workspaces })
    },
  })
}
