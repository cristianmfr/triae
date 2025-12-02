import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { UnauthorizedError } from '@/common/errors/unauthorized-error'
import { CreateWorkspaceSchema, WorkspaceSchema } from './workspaces.schema'
import workspacesService from './workspaces.service'

export const workspacesRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/workspaces',
    schema: {
      tags: ['Workspaces'],
      summary: 'Get all user workspaces',
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

      return reply.code(200).send({
        workspaces: await workspacesService.findManyUserWorkspaces(userId),
      })
    },
  })

  fastify.route({
    method: 'GET',
    url: '/workspaces/:slug',
    schema: {
      tags: ['Workspaces'],
      summary: 'Find a user workspace by slug',
      params: z.object({
        slug: z.string(),
      }),
      response: {
        200: z.object({
          workspace: WorkspaceSchema,
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id
      const workspaceSlug = request.params.slug

      if (!userId) throw new UnauthorizedError()

      return reply.code(200).send({
        workspace: await workspacesService.findUniqueUserWorkspaceBySlug(
          userId,
          workspaceSlug,
        ),
      })
    },
  })

  fastify.route({
    method: 'POST',
    url: '/workspaces',
    schema: {
      tags: ['Workspaces'],
      summary: 'Create a user workspace',
      body: CreateWorkspaceSchema,
      response: {
        201: z.object({
          workspace: WorkspaceSchema,
        }),
      },
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const userId = request.session?.user.id
      const workspaceData = request.body

      if (!userId) throw new UnauthorizedError()

      return reply.code(201).send({
        workspace: await workspacesService.createUserWorkspace(
          userId,
          workspaceData,
        ),
      })
    },
  })
}
