import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkspaceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMinOrderByAggregateInput>;
export const WorkspaceMinOrderByAggregateInputObjectZodSchema = makeSchema();
