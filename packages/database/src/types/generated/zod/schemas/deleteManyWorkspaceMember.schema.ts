import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './objects/WorkspaceMemberWhereInput.schema';

export const WorkspaceMemberDeleteManySchema: z.ZodType<Prisma.WorkspaceMemberDeleteManyArgs> = z.object({ where: WorkspaceMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberDeleteManyArgs>;

export const WorkspaceMemberDeleteManyZodSchema = z.object({ where: WorkspaceMemberWhereInputObjectSchema.optional() }).strict();