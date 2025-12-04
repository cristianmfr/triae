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
export const WorkspaceMemberCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCountOrderByAggregateInput>;
export const WorkspaceMemberCountOrderByAggregateInputObjectZodSchema = makeSchema();
