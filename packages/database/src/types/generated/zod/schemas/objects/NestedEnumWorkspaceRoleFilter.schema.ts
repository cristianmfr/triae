import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema'

const nestedenumworkspacerolefilterSchema = z.object({
  equals: WorkspaceRoleSchema.optional(),
  in: WorkspaceRoleSchema.array().optional(),
  notIn: WorkspaceRoleSchema.array().optional(),
  not: z.union([WorkspaceRoleSchema, z.lazy(() => NestedEnumWorkspaceRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumWorkspaceRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumWorkspaceRoleFilter> = nestedenumworkspacerolefilterSchema as unknown as z.ZodType<Prisma.NestedEnumWorkspaceRoleFilter>;
export const NestedEnumWorkspaceRoleFilterObjectZodSchema = nestedenumworkspacerolefilterSchema;
