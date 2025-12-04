import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WorkspaceMemberOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberOrderByRelationAggregateInput>;
export const WorkspaceMemberOrderByRelationAggregateInputObjectZodSchema = makeSchema();
