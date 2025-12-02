import { prisma } from '@triae/database/prisma'
import { ConflictError } from '@/common/errors/conflict.error'
import { NotFoundError } from '@/common/errors/not-found.error'
import { redis } from '@/utils/redis'
import { generateWorkspaceSlug } from '@/utils/workspace-slug'
import usersService from '../users/users.service'
import { CreateWorkspaceInput } from './workspaces.schema'

class WorkspacesService {
  private readonly WORKSPACE_CACHE_EXP_TTL = 60 * 60 * 24 * 7

  async findManyWorkspaces() {
    return await prisma.workspace.findMany()
  }

  async findUniqueWorkspaceById(id: string) {
    const workspace = await prisma.workspace.findUnique({
      where: { id },
    })

    if (!workspace) throw new NotFoundError('Workspace')

    return workspace
  }

  async findManyUserWorkspaces(userId: string) {
    return await prisma.workspace.findMany({
      where: {
        workspaceMembers: {
          some: {
            userId,
            active: true,
          },
        },
      },
    })
  }

  async findUniqueUserWorkspaceBySlug(userId: string, slug: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) throw new NotFoundError()

    const resolveSlug = generateWorkspaceSlug(user.username, slug)

    const userWorkspace = await prisma.workspace.findFirst({
      where: {
        slug: resolveSlug,
        workspaceMembers: {
          some: {
            userId,
            active: true,
          },
        },
      },
    })

    if (!userWorkspace) throw new NotFoundError('User workspace')

    return userWorkspace
  }

  async createUserWorkspace(
    userId: string,
    workspaceData: CreateWorkspaceInput,
  ) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
      })

      if (!user) throw new NotFoundError('User')

      const generatedSlug = generateWorkspaceSlug(
        user.username,
        workspaceData.slug,
      )

      const existingWorkspace = await tx.workspace.findUnique({
        where: { slug: generatedSlug },
      })

      if (existingWorkspace)
        throw new ConflictError('Workspace slug already exists')

      const workspace = await tx.workspace.create({
        data: {
          name: workspaceData.name,
          slug: generatedSlug,
          description: workspaceData.description,
        },
      })

      await tx.workspaceMember.create({
        data: {
          role: 'OWNER',
          userId: user.id,
          workspaceId: workspace.id,
        },
      })

      return workspace
    })
  }

  async createWorkspaceSession(userId: string, slug: string) {
    const hasWorkspaceSession = await redis.exists(`workspace:${userId}`)

    if (hasWorkspaceSession) {
      await redis.del(`workspace:${userId}`)
    }

    const user = await usersService.findUniqueUserById(userId)

    const resolvedSlug = generateWorkspaceSlug(user.username, slug)

    const workspace = await prisma.workspace.findFirst({
      where: {
        slug: resolvedSlug,
        workspaceMembers: {
          some: {
            userId,
            active: true,
          },
        },
      },
    })

    if (!workspace) throw new NotFoundError('Workspace')

    const workspaceMember = await prisma.workspaceMember.findUnique({
      where: {
        userId_workspaceId: { userId, workspaceId: workspace.id },
      },
      include: {
        user: true,
      },
    })

    if (!workspaceMember) throw new NotFoundError('Workspace member')

    const workspacePayload = {
      workspace: {
        id: workspace.id,
        name: workspace.name,
        slug: slug,
      },
      member: {
        id: workspaceMember.user.id,
        username: workspaceMember.user.username,
        role: workspaceMember.role,
      },
    }

    await redis.set(
      `workspace:${userId}`,
      JSON.stringify(workspacePayload),
      'EX',
      this.WORKSPACE_CACHE_EXP_TTL,
    )

    return workspacePayload
  }
}

export default new WorkspacesService()
