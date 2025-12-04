import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceOrderByWithRelationInputObjectSchema as WorkspaceOrderByWithRelationInputObjectSchema } from './objects/WorkspaceOrderByWithRelationInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';
import { WorkspaceCountAggregateInputObjectSchema as WorkspaceCountAggregateInputObjectSchema } from './objects/WorkspaceCountAggregateInput.schema';

export const WorkspaceCountSchema: z.ZodType<Prisma.WorkspaceCountArgs> = z.object({ orderBy: z.union([WorkspaceOrderByWithRelationInputObjectSchema, WorkspaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceWhereInputObjectSchema.optional(), cursor: WorkspaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkspaceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceCountArgs>;

export const WorkspaceCountZodSchema = z.object({ orderBy: z.union([WorkspaceOrderByWithRelationInputObjectSchema, WorkspaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceWhereInputObjectSchema.optional(), cursor: WorkspaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkspaceCountAggregateInputObjectSchema ]).optional() }).strict();