import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workspacescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkspaceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkspaceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkspaceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkspaceScalarWhereWithAggregatesInput> = workspacescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkspaceScalarWhereWithAggregatesInput>;
export const WorkspaceScalarWhereWithAggregatesInputObjectZodSchema = workspacescalarwherewithaggregatesinputSchema;
