import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumWorkspaceRoleWithAggregatesFilterObjectSchema as EnumWorkspaceRoleWithAggregatesFilterObjectSchema } from './EnumWorkspaceRoleWithAggregatesFilter.schema';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const workspacememberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumWorkspaceRoleWithAggregatesFilterObjectSchema), WorkspaceRoleSchema]).optional(),
  active: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkspaceMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberScalarWhereWithAggregatesInput> = workspacememberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WorkspaceMemberScalarWhereWithAggregatesInput>;
export const WorkspaceMemberScalarWhereWithAggregatesInputObjectZodSchema = workspacememberscalarwherewithaggregatesinputSchema;
