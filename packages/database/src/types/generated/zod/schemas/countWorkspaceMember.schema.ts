import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberOrderByWithRelationInputObjectSchema as WorkspaceMemberOrderByWithRelationInputObjectSchema } from './objects/WorkspaceMemberOrderByWithRelationInput.schema';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './objects/WorkspaceMemberWhereInput.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './objects/WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberCountAggregateInputObjectSchema as WorkspaceMemberCountAggregateInputObjectSchema } from './objects/WorkspaceMemberCountAggregateInput.schema';

export const WorkspaceMemberCountSchema: z.ZodType<Prisma.WorkspaceMemberCountArgs> = z.object({ orderBy: z.union([WorkspaceMemberOrderByWithRelationInputObjectSchema, WorkspaceMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceMemberWhereInputObjectSchema.optional(), cursor: WorkspaceMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkspaceMemberCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberCountArgs>;

export const WorkspaceMemberCountZodSchema = z.object({ orderBy: z.union([WorkspaceMemberOrderByWithRelationInputObjectSchema, WorkspaceMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkspaceMemberWhereInputObjectSchema.optional(), cursor: WorkspaceMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WorkspaceMemberCountAggregateInputObjectSchema ]).optional() }).strict();