import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const WorkspaceMaxAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMaxAggregateInputType>;
export const WorkspaceMaxAggregateInputObjectZodSchema = makeSchema();
