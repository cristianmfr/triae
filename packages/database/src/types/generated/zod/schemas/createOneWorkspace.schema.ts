import type { Prisma } from '../../client';
import * as z from 'zod';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './objects/WorkspaceSelect.schema';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './objects/WorkspaceInclude.schema';
import { WorkspaceCreateInputObjectSchema as WorkspaceCreateInputObjectSchema } from './objects/WorkspaceCreateInput.schema';
import { WorkspaceUncheckedCreateInputObjectSchema as WorkspaceUncheckedCreateInputObjectSchema } from './objects/WorkspaceUncheckedCreateInput.schema';

export const WorkspaceCreateOneSchema: z.ZodType<Prisma.WorkspaceCreateArgs> = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), data: z.union([WorkspaceCreateInputObjectSchema, WorkspaceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WorkspaceCreateArgs>;

export const WorkspaceCreateOneZodSchema = z.object({ select: WorkspaceSelectObjectSchema.optional(), include: WorkspaceIncludeObjectSchema.optional(), data: z.union([WorkspaceCreateInputObjectSchema, WorkspaceUncheckedCreateInputObjectSchema]) }).strict();