import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutWorkspaceMembersInput>;
export const WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
