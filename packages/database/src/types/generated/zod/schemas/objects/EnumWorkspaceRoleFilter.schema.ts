import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { NestedEnumWorkspaceRoleFilterObjectSchema as NestedEnumWorkspaceRoleFilterObjectSchema } from './NestedEnumWorkspaceRoleFilter.schema'

const makeSchema = () => z.object({
  equals: WorkspaceRoleSchema.optional(),
  in: WorkspaceRoleSchema.array().optional(),
  notIn: WorkspaceRoleSchema.array().optional(),
  not: z.union([WorkspaceRoleSchema, z.lazy(() => NestedEnumWorkspaceRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumWorkspaceRoleFilterObjectSchema: z.ZodType<Prisma.EnumWorkspaceRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkspaceRoleFilter>;
export const EnumWorkspaceRoleFilterObjectZodSchema = makeSchema();
