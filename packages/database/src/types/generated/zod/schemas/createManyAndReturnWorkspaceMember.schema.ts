import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './objects/WorkspaceMemberSelect.schema';
import { WorkspaceMemberCreateManyInputObjectSchema as WorkspaceMemberCreateManyInputObjectSchema } from './objects/WorkspaceMemberCreateManyInput.schema';

export const WorkspaceMemberCreateManyAndReturnSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyAndReturnArgs> = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), data: z.union([ WorkspaceMemberCreateManyInputObjectSchema, z.array(WorkspaceMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateManyAndReturnArgs>;

export const WorkspaceMemberCreateManyAndReturnZodSchema = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), data: z.union([ WorkspaceMemberCreateManyInputObjectSchema, z.array(WorkspaceMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();