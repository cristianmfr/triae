import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  role: WorkspaceRoleSchema.optional(),
  active: z.boolean().optional(),
  userId: z.string(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WorkspaceMemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedCreateInput>;
export const WorkspaceMemberUncheckedCreateInputObjectZodSchema = makeSchema();
