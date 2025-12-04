import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { WorkspaceMemberOrderByRelationAggregateInputObjectSchema as WorkspaceMemberOrderByRelationAggregateInputObjectSchema } from './WorkspaceMemberOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WorkspaceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkspaceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceOrderByWithRelationInput>;
export const WorkspaceOrderByWithRelationInputObjectZodSchema = makeSchema();
