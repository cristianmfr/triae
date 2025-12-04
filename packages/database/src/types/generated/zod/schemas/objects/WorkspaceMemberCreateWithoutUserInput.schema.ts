import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateNestedOneWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: WorkspaceRoleSchema.optional(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema)
}).strict();
export const WorkspaceMemberCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateWithoutUserInput>;
export const WorkspaceMemberCreateWithoutUserInputObjectZodSchema = makeSchema();
