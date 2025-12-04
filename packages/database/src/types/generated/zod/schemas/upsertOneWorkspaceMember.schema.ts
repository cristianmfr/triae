import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './objects/WorkspaceMemberSelect.schema';
import { WorkspaceMemberIncludeObjectSchema as WorkspaceMemberIncludeObjectSchema } from './objects/WorkspaceMemberInclude.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './objects/WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberCreateInputObjectSchema as WorkspaceMemberCreateInputObjectSchema } from './objects/WorkspaceMemberCreateInput.schema';
import { WorkspaceMemberUncheckedCreateInputObjectSchema as WorkspaceMemberUncheckedCreateInputObjectSchema } from './objects/WorkspaceMemberUncheckedCreateInput.schema';
import { WorkspaceMemberUpdateInputObjectSchema as WorkspaceMemberUpdateInputObjectSchema } from './objects/WorkspaceMemberUpdateInput.schema';
import { WorkspaceMemberUncheckedUpdateInputObjectSchema as WorkspaceMemberUncheckedUpdateInputObjectSchema } from './objects/WorkspaceMemberUncheckedUpdateInput.schema';

export const WorkspaceMemberUpsertOneSchema: z.ZodType<Prisma.WorkspaceMemberUpsertArgs> = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), where: WorkspaceMemberWhereUniqueInputObjectSchema, create: z.union([ WorkspaceMemberCreateInputObjectSchema, WorkspaceMemberUncheckedCreateInputObjectSchema ]), update: z.union([ WorkspaceMemberUpdateInputObjectSchema, WorkspaceMemberUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberUpsertArgs>;

export const WorkspaceMemberUpsertOneZodSchema = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), where: WorkspaceMemberWhereUniqueInputObjectSchema, create: z.union([ WorkspaceMemberCreateInputObjectSchema, WorkspaceMemberUncheckedCreateInputObjectSchema ]), update: z.union([ WorkspaceMemberUpdateInputObjectSchema, WorkspaceMemberUncheckedUpdateInputObjectSchema ]) }).strict();