import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema as EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema } from './EnumWorkspaceRoleFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([WorkspaceRoleSchema, z.lazy(() => EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  workspaceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WorkspaceMemberUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateManyInput>;
export const WorkspaceMemberUncheckedUpdateManyInputObjectZodSchema = makeSchema();
