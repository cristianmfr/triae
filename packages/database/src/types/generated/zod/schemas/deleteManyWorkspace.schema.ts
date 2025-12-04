import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema';

export const WorkspaceDeleteManySchema: z.ZodType<Prisma.WorkspaceDeleteManyArgs> = z.object({ where: WorkspaceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceDeleteManyArgs>;

export const WorkspaceDeleteManyZodSchema = z.object({ where: WorkspaceWhereInputObjectSchema.optional() }).strict();