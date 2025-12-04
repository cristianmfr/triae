import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceUpdateManyMutationInputObjectSchema as WorkspaceUpdateManyMutationInputObjectSchema } from './objects/WorkspaceUpdateManyMutationInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './objects/WorkspaceWhereInput.schema';

export const WorkspaceUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkspaceUpdateManyAndReturnArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), data: WorkspaceUpdateManyMutationInputObjectSchema, where: WorkspaceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceUpdateManyAndReturnArgs>;

export const WorkspaceUpdateManyAndReturnZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), data: WorkspaceUpdateManyMutationInputObjectSchema, where: WorkspaceWhereInputObjectSchema.optional() }).strict();