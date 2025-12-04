import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumWorkspaceRoleFilterObjectSchema as EnumWorkspaceRoleFilterObjectSchema } from './EnumWorkspaceRoleFilter.schema';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workspacememberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumWorkspaceRoleFilterObjectSchema), WorkspaceRoleSchema]).optional(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkspaceMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberScalarWhereInput> = workspacememberscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkspaceMemberScalarWhereInput>;
export const WorkspaceMemberScalarWhereInputObjectZodSchema = workspacememberscalarwhereinputSchema;
