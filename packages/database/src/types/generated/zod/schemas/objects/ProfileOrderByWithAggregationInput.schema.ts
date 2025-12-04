import * as z from 'zod';
import type { Prisma } from '../../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileCountOrderByAggregateInputObjectSchema as ProfileCountOrderByAggregateInputObjectSchema } from './ProfileCountOrderByAggregateInput.schema';
import { ProfileMaxOrderByAggregateInputObjectSchema as ProfileMaxOrderByAggregateInputObjectSchema } from './ProfileMaxOrderByAggregateInput.schema';
import { ProfileMinOrderByAggregateInputObjectSchema as ProfileMinOrderByAggregateInputObjectSchema } from './ProfileMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  company: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByWithAggregationInput>;
export const ProfileOrderByWithAggregationInputObjectZodSchema = makeSchema();
