import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInputObjectSchema).optional()
}).strict();
export const WorkspaceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedCreateInput>;
export const WorkspaceUncheckedCreateInputObjectZodSchema = makeSchema();
