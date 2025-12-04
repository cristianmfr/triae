import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: WorkspaceRoleSchema.optional(),
  active: z.boolean().optional(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkspaceMemberCreateManyUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateManyUserInput>;
export const WorkspaceMemberCreateManyUserInputObjectZodSchema = makeSchema();
