import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: WorkspaceRoleSchema.optional(),
  active: z.boolean().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkspaceMemberCreateManyWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateManyWorkspaceInput>;
export const WorkspaceMemberCreateManyWorkspaceInputObjectZodSchema = makeSchema();
