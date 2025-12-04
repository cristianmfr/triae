import { prisma } from '@triae/database/prisma'
import {
  CreateWorkspaceInput,
  UpdateWorkspaceInput,
} from '@/schemas/workspaces-schemas'
import { ConflictError } from '@/server/errors/conflict-error'
import { NotFoundError } from '@/server/errors/not-found-error'

class WorkspacesService {
  generateWorkspaceSlug(username: string, slug: string) {
    const resolvedUsername = username.toLowerCase().trim()
    const resolvedSlug = slug.toLocaleLowerCase().trim()

    return `${resolvedUsername}.${resolvedSlug}`
  }

  async findManyWorkspaces(userId: string) {
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

  async findUniqueWorkspaceById(id: string) {
    const workspace = await prisma.workspace.findUnique({
      where: { id },
    })

    if (!workspace) throw new NotFoundError('Workspace')

    return workspace
  }

  async findUniqueWorkspaceBySlug(userId: string, slug: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) throw new NotFoundError()

    const resolveSlug = this.generateWorkspaceSlug(user.username, slug)

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

  async createWorkspace(userId: string, workspaceData: CreateWorkspaceInput) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
      })

      if (!user) throw new NotFoundError('User')

      const generatedSlug = this.generateWorkspaceSlug(
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

  async updateWorkspace(
    userId: string,
    workspaceId: string,
    data: UpdateWorkspaceInput,
  ) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
      })

      if (!user) throw new NotFoundError('User')

      const workspace = await tx.workspace.findUnique({
        where: {
          id: workspaceId,
          workspaceMembers: {
            some: {
              userId,
              active: true,
            },
          },
        },
      })

      if (!workspace) throw new NotFoundError('Workspace')

      let newSlug: string | undefined

      if (data.slug) {
        newSlug = this.generateWorkspaceSlug(user.username, data.slug)

        const existingWorkspace = await tx.workspace.findFirst({
          where: {
            slug: newSlug,
            id: { not: workspaceId },
          },
        })

        if (existingWorkspace)
          throw new ConflictError('Workspace slug already exists')
      }

      return await tx.workspace.update({
        where: { id: workspaceId },
        data: {
          name: data.name,
          slug: newSlug,
          description: data.description,
        },
      })
    })
  }

  async deleteWorkspace(userId: string, workspaceId: string) {
    const workspace = await prisma.workspace.findUnique({
      where: {
        id: workspaceId,
        workspaceMembers: {
          some: {
            userId,
            active: true,
          },
        },
      },
    })

    if (!workspace) throw new NotFoundError('Workspace')

    return workspace
  }
}

export default new WorkspacesService()
