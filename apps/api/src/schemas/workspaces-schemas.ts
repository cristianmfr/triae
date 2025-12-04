import z from 'zod'
import { UserSchema } from './users-schemas'

export const WorkspaceRoleEnumSchema = z.enum([
  'OWNER',
  'ADMIN',
  'USER',
  'GUEST',
])

export const WorkspaceSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const WorkspaceMemberSchema = z.object({
  id: z.string(),
  role: WorkspaceRoleEnumSchema,
  active: z.boolean(),
  userId: z.string(),
  workspaceId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: UserSchema,
  workspace: WorkspaceSchema,
})

export const CreateWorkspaceInputSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
})

export const UpdateWorkspaceInputSchema = CreateWorkspaceInputSchema.partial()

export const CreateWorkspaceResponseSchema = z.object({
  createdWorkspace: WorkspaceSchema,
})

export const UpdateWorkspaceResponseSchema = z.object({
  updatedWorkspace: WorkspaceSchema,
})

export type Workspace = z.infer<typeof WorkspaceSchema>
export type WorkspaceMember = z.infer<typeof WorkspaceMemberSchema>

export type CreateWorkspaceInput = z.infer<typeof CreateWorkspaceInputSchema>
export type UpdateWorkspaceInput = z.infer<typeof UpdateWorkspaceInputSchema>
