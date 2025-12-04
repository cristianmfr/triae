import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema as UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceMembersInput.schema';
import { WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateNestedOneWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: WorkspaceRoleSchema.optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema)
}).strict();
export const WorkspaceMemberCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateInput>;
export const WorkspaceMemberCreateInputObjectZodSchema = makeSchema();
