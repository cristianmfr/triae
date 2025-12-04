import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkspaceCountOrderByAggregateInputObjectSchema as WorkspaceCountOrderByAggregateInputObjectSchema } from './WorkspaceCountOrderByAggregateInput.schema';
import { WorkspaceMaxOrderByAggregateInputObjectSchema as WorkspaceMaxOrderByAggregateInputObjectSchema } from './WorkspaceMaxOrderByAggregateInput.schema';
import { WorkspaceMinOrderByAggregateInputObjectSchema as WorkspaceMinOrderByAggregateInputObjectSchema } from './WorkspaceMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WorkspaceCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WorkspaceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WorkspaceMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WorkspaceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WorkspaceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceOrderByWithAggregationInput>;
export const WorkspaceOrderByWithAggregationInputObjectZodSchema = makeSchema();
