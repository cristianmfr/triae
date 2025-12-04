import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './objects/WorkspaceInclude.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';

export const WorkspaceFindUniqueSchema: z.ZodType<Prisma.WorkspaceFindUniqueArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), where: WorkspaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkspaceFindUniqueArgs>;

export const WorkspaceFindUniqueZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), where: WorkspaceWhereUniqueInputObjectSchema }).strict();