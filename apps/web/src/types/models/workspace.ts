import {
  WorkspaceCreateInputObjectSchema,
  WorkspaceModelSchema,
} from '@triae/database/schemas'
import z from 'zod'

export type Workspace = z.infer<typeof WorkspaceModelSchema>

export type CreateWorkspaceInput = z.infer<
  typeof WorkspaceCreateInputObjectSchema
>
