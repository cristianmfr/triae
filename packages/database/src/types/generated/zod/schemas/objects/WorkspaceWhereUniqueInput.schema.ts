import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().optional()
}).strict();
export const WorkspaceWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkspaceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceWhereUniqueInput>;
export const WorkspaceWhereUniqueInputObjectZodSchema = makeSchema();
