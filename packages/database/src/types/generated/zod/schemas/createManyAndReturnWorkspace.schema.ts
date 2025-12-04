import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceCreateManyInputObjectSchema as WorkspaceCreateManyInputObjectSchema } from './objects/WorkspaceCreateManyInput.schema';

export const WorkspaceCreateManyAndReturnSchema: z.ZodType<Prisma.WorkspaceCreateManyAndReturnArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), data: z.union([ WorkspaceCreateManyInputObjectSchema, z.array(WorkspaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceCreateManyAndReturnArgs>;

export const WorkspaceCreateManyAndReturnZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), data: z.union([ WorkspaceCreateManyInputObjectSchema, z.array(WorkspaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();