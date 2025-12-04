import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumWorkspaceRoleFilterObjectSchema as NestedEnumWorkspaceRoleFilterObjectSchema } from './NestedEnumWorkspaceRoleFilter.schema'

const nestedenumworkspacerolewithaggregatesfilterSchema = z.object({
  equals: WorkspaceRoleSchema.optional(),
  in: WorkspaceRoleSchema.array().optional(),
  notIn: WorkspaceRoleSchema.array().optional(),
  not: z.union([WorkspaceRoleSchema, z.lazy(() => NestedEnumWorkspaceRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkspaceRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkspaceRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumWorkspaceRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumWorkspaceRoleWithAggregatesFilter> = nestedenumworkspacerolewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumWorkspaceRoleWithAggregatesFilter>;
export const NestedEnumWorkspaceRoleWithAggregatesFilterObjectZodSchema = nestedenumworkspacerolewithaggregatesfilterSchema;
