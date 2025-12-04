import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './objects/WorkspaceMemberSelect.schema';
import { WorkspaceMemberIncludeObjectSchema as WorkspaceMemberIncludeObjectSchema } from './objects/WorkspaceMemberInclude.schema';
import { WorkspaceMemberCreateInputObjectSchema as WorkspaceMemberCreateInputObjectSchema } from './objects/WorkspaceMemberCreateInput.schema';
import { WorkspaceMemberUncheckedCreateInputObjectSchema as WorkspaceMemberUncheckedCreateInputObjectSchema } from './objects/WorkspaceMemberUncheckedCreateInput.schema';

export const WorkspaceMemberCreateOneSchema: z.ZodType<Prisma.WorkspaceMemberCreateArgs> = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), data: z.union([WorkspaceMemberCreateInputObjectSchema, WorkspaceMemberUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateArgs>;

export const WorkspaceMemberCreateOneZodSchema = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), data: z.union([WorkspaceMemberCreateInputObjectSchema, WorkspaceMemberUncheckedCreateInputObjectSchema]) }).strict();