import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { WorkspaceOrderByWithRelationInputObjectSchema as WorkspaceOrderByWithRelationInputObjectSchema } from './WorkspaceOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  workspaceId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  workspace: z.lazy(() => WorkspaceOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberOrderByWithRelationInput>;
export const WorkspaceMemberOrderByWithRelationInputObjectZodSchema = makeSchema();
