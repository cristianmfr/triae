import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberCreateManyInputObjectSchema as WorkspaceMemberCreateManyInputObjectSchema } from './objects/WorkspaceMemberCreateManyInput.schema';

export const WorkspaceMemberCreateManySchema: z.ZodType<Prisma.WorkspaceMemberCreateManyArgs> = z.object({ data: z.union([ WorkspaceMemberCreateManyInputObjectSchema, z.array(WorkspaceMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateManyArgs>;

export const WorkspaceMemberCreateManyZodSchema = z.object({ data: z.union([ WorkspaceMemberCreateManyInputObjectSchema, z.array(WorkspaceMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();