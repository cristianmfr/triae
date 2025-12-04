import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberUpdateManyMutationInputObjectSchema as WorkspaceMemberUpdateManyMutationInputObjectSchema } from './objects/WorkspaceMemberUpdateManyMutationInput.schema';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './objects/WorkspaceMemberWhereInput.schema';

export const WorkspaceMemberUpdateManySchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyArgs> = z.object({ data: WorkspaceMemberUpdateManyMutationInputObjectSchema, where: WorkspaceMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateManyArgs>;

export const WorkspaceMemberUpdateManyZodSchema = z.object({ data: WorkspaceMemberUpdateManyMutationInputObjectSchema, where: WorkspaceMemberWhereInputObjectSchema.optional() }).strict();