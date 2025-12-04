import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WorkspaceCountAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCountAggregateInputType>;
export const WorkspaceCountAggregateInputObjectZodSchema = makeSchema();
