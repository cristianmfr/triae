import * as z from 'zod';
import type { Prisma } from '../../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema as WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema).optional()
}).strict();
export const WorkspaceUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUncheckedUpdateInput>;
export const WorkspaceUncheckedUpdateInputObjectZodSchema = makeSchema();
