import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './objects/WorkspaceInclude.schema';
import { WorkspaceOrderByWithRelationInputObjectSchema as WorkspaceOrderByWithRelationInputObjectSchema } from './objects/WorkspaceOrderByWithRelationInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';
import { WorkspaceScalarFieldEnumSchema } from './enums/WorkspaceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceFindFirstSelectSchema: z.ZodType<Prisma.WorkspaceSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workspaceMembers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkspaceSelect>;

export const WorkspaceFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    slug: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    workspaceMembers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const WorkspaceFindFirstSchema: z.ZodType<Prisma.WorkspaceFindFirstArgs> = z.object({ select: WorkspaceFindFirstSelectSchema.optional(), include: z.lazy(() => WorkspaceIncludeObjectSchema.optional()), orderBy: z.union([WorkspaceOrderByWithRelationInputObjectSchema, WorkspaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceWhereInputObjectSchema.optional(), cursor: WorkspaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkspaceScalarFieldEnumSchema, WorkspaceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceFindFirstArgs>;

export const WorkspaceFindFirstZodSchema = z.object({ select: WorkspaceFindFirstSelectSchema.optional(), include: z.lazy(() => WorkspaceIncludeObjectSchema.optional()), orderBy: z.union([WorkspaceOrderByWithRelationInputObjectSchema, WorkspaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceWhereInputObjectSchema.optional(), cursor: WorkspaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkspaceScalarFieldEnumSchema, WorkspaceScalarFieldEnumSchema.array()]).optional() }).strict();