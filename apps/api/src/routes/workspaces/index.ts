import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createWorkspace } from './create-workspace'
import { deleteWorkspace } from './delete-workspace'
import { fetchWorkspaces } from './fetch-workspaces'
import { getWorkspace } from './get-workspace'
import { updateWorkspace } from './update-workspace'

export const workspacesRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.register(fetchWorkspaces)
  fastify.register(getWorkspace)
  fastify.register(createWorkspace)
  fastify.register(updateWorkspace)
  fastify.register(deleteWorkspace)
}
