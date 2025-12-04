import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema'

const makeSchema = () => z.object({
  set: WorkspaceRoleSchema.optional()
}).strict();
export const EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumWorkspaceRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumWorkspaceRoleFieldUpdateOperationsInput>;
export const EnumWorkspaceRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
