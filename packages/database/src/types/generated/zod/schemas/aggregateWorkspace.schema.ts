import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceOrderByWithRelationInputObjectSchema as WorkspaceOrderByWithRelationInputObjectSchema } from './objects/WorkspaceOrderByWithRelationInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';
import { WorkspaceCountAggregateInputObjectSchema as WorkspaceCountAggregateInputObjectSchema } from './objects/WorkspaceCountAggregateInput.schema';
import { WorkspaceMinAggregateInputObjectSchema as WorkspaceMinAggregateInputObjectSchema } from './objects/WorkspaceMinAggregateInput.schema';
import { WorkspaceMaxAggregateInputObjectSchema as WorkspaceMaxAggregateInputObjectSchema } from './objects/WorkspaceMaxAggregateInput.schema';

export const WorkspaceAggregateSchema: z.ZodType<Prisma.WorkspaceAggregateArgs> = z.object({ orderBy: z.union([WorkspaceOrderByWithRelationInputObjectSchema, WorkspaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceWhereInputObjectSchema.optional(), cursor: WorkspaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WorkspaceCountAggregateInputObjectSchema ]).optional(), _min: WorkspaceMinAggregateInputObjectSchema.optional(), _max: WorkspaceMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceAggregateArgs>;

export const WorkspaceAggregateZodSchema = z.object({ orderBy: z.union([WorkspaceOrderByWithRelationInputObjectSchema, WorkspaceOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceWhereInputObjectSchema.optional(), cursor: WorkspaceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WorkspaceCountAggregateInputObjectSchema ]).optional(), _min: WorkspaceMinAggregateInputObjectSchema.optional(), _max: WorkspaceMaxAggregateInputObjectSchema.optional() }).strict();