import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumWorkspaceRoleFilterObjectSchema as EnumWorkspaceRoleFilterObjectSchema } from './EnumWorkspaceRoleFilter.schema';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { WorkspaceScalarRelationFilterObjectSchema as WorkspaceScalarRelationFilterObjectSchema } from './WorkspaceScalarRelationFilter.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const workspacememberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkspaceMemberWhereInputObjectSchema), z.lazy(() => WorkspaceMemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkspaceMemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkspaceMemberWhereInputObjectSchema), z.lazy(() => WorkspaceMemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumWorkspaceRoleFilterObjectSchema), WorkspaceRoleSchema]).optional(),
  active: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  workspaceId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  workspace: z.union([z.lazy(() => WorkspaceScalarRelationFilterObjectSchema), z.lazy(() => WorkspaceWhereInputObjectSchema)]).optional()
}).strict();
export const WorkspaceMemberWhereInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberWhereInput> = workspacememberwhereinputSchema as unknown as z.ZodType<Prisma.WorkspaceMemberWhereInput>;
export const WorkspaceMemberWhereInputObjectZodSchema = workspacememberwhereinputSchema;
