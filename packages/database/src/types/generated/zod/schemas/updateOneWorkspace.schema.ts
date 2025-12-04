import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './objects/WorkspaceInclude.schema';
import { WorkspaceUpdateInputObjectSchema as WorkspaceUpdateInputObjectSchema } from './objects/WorkspaceUpdateInput.schema';
import { WorkspaceUncheckedUpdateInputObjectSchema as WorkspaceUncheckedUpdateInputObjectSchema } from './objects/WorkspaceUncheckedUpdateInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';

export const WorkspaceUpdateOneSchema: z.ZodType<Prisma.WorkspaceUpdateArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), data: z.union([WorkspaceUpdateInputObjectSchema, WorkspaceUncheckedUpdateInputObjectSchema]), where: WorkspaceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkspaceUpdateArgs>;

export const WorkspaceUpdateOneZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), data: z.union([WorkspaceUpdateInputObjectSchema, WorkspaceUncheckedUpdateInputObjectSchema]), where: WorkspaceWhereUniqueInputObjectSchema }).strict();