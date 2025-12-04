import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  phone: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProfileMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMaxOrderByAggregateInput>;
export const ProfileMaxOrderByAggregateInputObjectZodSchema = makeSchema();
