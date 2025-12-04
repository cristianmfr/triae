import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './objects/WorkspaceMemberSelect.schema';
import { WorkspaceMemberIncludeObjectSchema as WorkspaceMemberIncludeObjectSchema } from './objects/WorkspaceMemberInclude.schema';
import { WorkspaceMemberUpdateInputObjectSchema as WorkspaceMemberUpdateInputObjectSchema } from './objects/WorkspaceMemberUpdateInput.schema';
import { WorkspaceMemberUncheckedUpdateInputObjectSchema as WorkspaceMemberUncheckedUpdateInputObjectSchema } from './objects/WorkspaceMemberUncheckedUpdateInput.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './objects/WorkspaceMemberWhereUniqueInput.schema';

export const WorkspaceMemberUpdateOneSchema: z.ZodType<Prisma.WorkspaceMemberUpdateArgs> = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), data: z.union([WorkspaceMemberUpdateInputObjectSchema, WorkspaceMemberUncheckedUpdateInputObjectSchema]), where: WorkspaceMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateArgs>;

export const WorkspaceMemberUpdateOneZodSchema = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), data: z.union([WorkspaceMemberUpdateInputObjectSchema, WorkspaceMemberUncheckedUpdateInputObjectSchema]), where: WorkspaceMemberWhereUniqueInputObjectSchema }).strict();