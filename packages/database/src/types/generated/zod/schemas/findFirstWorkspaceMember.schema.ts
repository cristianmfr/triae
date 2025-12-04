import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberIncludeObjectSchema as WorkspaceMemberIncludeObjectSchema } from './objects/WorkspaceMemberInclude.schema';
import { WorkspaceMemberOrderByWithRelationInputObjectSchema as WorkspaceMemberOrderByWithRelationInputObjectSchema } from './objects/WorkspaceMemberOrderByWithRelationInput.schema';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './objects/WorkspaceMemberWhereInput.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './objects/WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberScalarFieldEnumSchema } from './enums/WorkspaceMemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceMemberFindFirstSelectSchema: z.ZodType<Prisma.WorkspaceMemberSelect> = z.object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    active: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    workspaceId: z.boolean().optional(),
    workspace: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberSelect>;

export const WorkspaceMemberFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    active: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    workspaceId: z.boolean().optional(),
    workspace: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const WorkspaceMemberFindFirstSchema: z.ZodType<Prisma.WorkspaceMemberFindFirstArgs> = z.object({ select: WorkspaceMemberFindFirstSelectSchema.optional(), include: z.lazy(() => WorkspaceMemberIncludeObjectSchema.optional()), orderBy: z.union([WorkspaceMemberOrderByWithRelationInputObjectSchema, WorkspaceMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceMemberWhereInputObjectSchema.optional(), cursor: WorkspaceMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkspaceMemberScalarFieldEnumSchema, WorkspaceMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberFindFirstArgs>;

export const WorkspaceMemberFindFirstZodSchema = z.object({ select: WorkspaceMemberFindFirstSelectSchema.optional(), include: z.lazy(() => WorkspaceMemberIncludeObjectSchema.optional()), orderBy: z.union([WorkspaceMemberOrderByWithRelationInputObjectSchema, WorkspaceMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceMemberWhereInputObjectSchema.optional(), cursor: WorkspaceMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkspaceMemberScalarFieldEnumSchema, WorkspaceMemberScalarFieldEnumSchema.array()]).optional() }).strict();