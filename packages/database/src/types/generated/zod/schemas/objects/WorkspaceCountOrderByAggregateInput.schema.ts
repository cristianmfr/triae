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
export const WorkspaceCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCountOrderByAggregateInput>;
export const WorkspaceCountOrderByAggregateInputObjectZodSchema = makeSchema();
