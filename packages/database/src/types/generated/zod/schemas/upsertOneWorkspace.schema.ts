import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './objects/WorkspaceInclude.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './objects/WorkspaceWhereUniqueInput.schema';
import { WorkspaceCreateInputObjectSchema as WorkspaceCreateInputObjectSchema } from './objects/WorkspaceCreateInput.schema';
import { WorkspaceUncheckedCreateInputObjectSchema as WorkspaceUncheckedCreateInputObjectSchema } from './objects/WorkspaceUncheckedCreateInput.schema';
import { WorkspaceUpdateInputObjectSchema as WorkspaceUpdateInputObjectSchema } from './objects/WorkspaceUpdateInput.schema';
import { WorkspaceUncheckedUpdateInputObjectSchema as WorkspaceUncheckedUpdateInputObjectSchema } from './objects/WorkspaceUncheckedUpdateInput.schema';

export const WorkspaceUpsertOneSchema: z.ZodType<Prisma.WorkspaceUpsertArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), where: WorkspaceWhereUniqueInputObjectSchema, create: z.union([ WorkspaceCreateInputObjectSchema, WorkspaceUncheckedCreateInputObjectSchema ]), update: z.union([ WorkspaceUpdateInputObjectSchema, WorkspaceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WorkspaceUpsertArgs>;

export const WorkspaceUpsertOneZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), where: WorkspaceWhereUniqueInputObjectSchema, create: z.union([ WorkspaceCreateInputObjectSchema, WorkspaceUncheckedCreateInputObjectSchema ]), update: z.union([ WorkspaceUpdateInputObjectSchema, WorkspaceUncheckedUpdateInputObjectSchema ]) }).strict();