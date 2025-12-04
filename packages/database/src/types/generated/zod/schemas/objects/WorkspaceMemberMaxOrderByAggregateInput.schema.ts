import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const WorkspaceMemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberMaxOrderByAggregateInput>;
export const WorkspaceMemberMaxOrderByAggregateInputObjectZodSchema = makeSchema();
