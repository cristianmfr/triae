import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { WorkspaceMemberListRelationFilterObjectSchema as WorkspaceMemberListRelationFilterObjectSchema } from './WorkspaceMemberListRelationFilter.schema'

const workspacewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceWhereInputObjectSchema), z.lazy(() => WorkspaceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceWhereInputObjectSchema), z.lazy(() => WorkspaceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberListRelationFilterObjectSchema).optional()
}).strict();
export const WorkspaceWhereInputObjectSchema: z.ZodType<Prisma.WorkspaceWhereInput> = workspacewhereinputSchema as unknown as z.ZodType<Prisma.WorkspaceWhereInput>;
export const WorkspaceWhereInputObjectZodSchema = workspacewhereinputSchema;
