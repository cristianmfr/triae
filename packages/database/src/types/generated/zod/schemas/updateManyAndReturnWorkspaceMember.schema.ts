import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './objects/WorkspaceMemberSelect.schema';
import { WorkspaceMemberUpdateManyMutationInputObjectSchema as WorkspaceMemberUpdateManyMutationInputObjectSchema } from './objects/WorkspaceMemberUpdateManyMutationInput.schema';
import { WorkspaceMemberWhereInputObjectSchema as WorkspaceMemberWhereInputObjectSchema } from './objects/WorkspaceMemberWhereInput.schema';

export const WorkspaceMemberUpdateManyAndReturnSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyAndReturnArgs> = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), data: WorkspaceMemberUpdateManyMutationInputObjectSchema, where: WorkspaceMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateManyAndReturnArgs>;

export const WorkspaceMemberUpdateManyAndReturnZodSchema = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), data: WorkspaceMemberUpdateManyMutationInputObjectSchema, where: WorkspaceMemberWhereInputObjectSchema.optional() }).strict();