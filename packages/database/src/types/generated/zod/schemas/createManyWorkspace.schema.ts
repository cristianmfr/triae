import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceCreateManyInputObjectSchema as WorkspaceCreateManyInputObjectSchema } from './objects/WorkspaceCreateManyInput.schema';

export const WorkspaceCreateManySchema: z.ZodType<Prisma.WorkspaceCreateManyArgs> = z.object({ data: z.union([ WorkspaceCreateManyInputObjectSchema, z.array(WorkspaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceCreateManyArgs>;

export const WorkspaceCreateManyZodSchema = z.object({ data: z.union([ WorkspaceCreateManyInputObjectSchema, z.array(WorkspaceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();