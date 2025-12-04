import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { WorkspaceRoleSchema } from '../enums/WorkspaceRole.schema';
import { EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema as EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema } from './EnumWorkspaceRoleFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectSchema as WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectSchema } from './WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.union([WorkspaceRoleSchema, z.lazy(() => EnumWorkspaceRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  active: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateWithoutUserInput>;
export const WorkspaceMemberUpdateWithoutUserInputObjectZodSchema = makeSchema();
