import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema as UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema } from './UserCreateNestedOneWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: WorkspaceRoleSchema.optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema)
}).strict();
export const WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateWithoutWorkspaceInput>;
export const WorkspaceMemberCreateWithoutWorkspaceInputObjectZodSchema = makeSchema();
