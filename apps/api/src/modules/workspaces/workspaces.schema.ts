import z from 'zod'
import { UserSchema } from '../users/users.schema'

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

export const CreateWorkspaceSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
})

export const UpdateWorkspaceSchema = CreateWorkspaceSchema.partial()

export type Workspace = z.infer<typeof WorkspaceSchema>
export type WorkspaceMember = z.infer<typeof WorkspaceMemberSchema>

export type CreateWorkspaceInput = z.infer<typeof CreateWorkspaceSchema>
export type UpdateWorkspaceInput = z.infer<typeof UpdateWorkspaceSchema>
