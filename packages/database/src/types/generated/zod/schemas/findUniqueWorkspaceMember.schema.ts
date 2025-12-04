import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './objects/WorkspaceMemberSelect.schema';
import { WorkspaceMemberIncludeObjectSchema as WorkspaceMemberIncludeObjectSchema } from './objects/WorkspaceMemberInclude.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './objects/WorkspaceMemberWhereUniqueInput.schema';

export const WorkspaceMemberFindUniqueSchema: z.ZodType<Prisma.WorkspaceMemberFindUniqueArgs> = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), where: WorkspaceMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkspaceMemberFindUniqueArgs>;

export const WorkspaceMemberFindUniqueZodSchema = z.object({ select: WorkspaceMemberSelectObjectSchema.optional(), include: WorkspaceMemberIncludeObjectSchema.optional(), where: WorkspaceMemberWhereUniqueInputObjectSchema }).strict();