import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceUpdateManyMutationInputObjectSchema as WorkspaceUpdateManyMutationInputObjectSchema } from './objects/WorkspaceUpdateManyMutationInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema';

export const WorkspaceUpdateManySchema: z.ZodType<Prisma.WorkspaceUpdateManyArgs> = z.object({ data: WorkspaceUpdateManyMutationInputObjectSchema, where: WorkspaceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceUpdateManyArgs>;

export const WorkspaceUpdateManyZodSchema = z.object({ data: WorkspaceUpdateManyMutationInputObjectSchema, where: WorkspaceWhereInputObjectSchema.optional() }).strict();