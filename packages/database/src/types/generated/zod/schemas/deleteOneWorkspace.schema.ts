import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './objects/WorkspaceInclude.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';

export const WorkspaceDeleteOneSchema: z.ZodType<Prisma.WorkspaceDeleteArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), where: WorkspaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkspaceDeleteArgs>;

export const WorkspaceDeleteOneZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), where: WorkspaceWhereUniqueInputObjectSchema }).strict();