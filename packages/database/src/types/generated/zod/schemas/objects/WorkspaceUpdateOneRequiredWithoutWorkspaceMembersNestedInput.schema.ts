import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateOrConnectWithoutWorkspaceMembersInput.schema';
import { WorkspaceUpsertWithoutWorkspaceMembersInputObjectSchema as WorkspaceUpsertWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUpsertWithoutWorkspaceMembersInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema as WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInput.schema';
import { WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUpdateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutWorkspaceMembersInputObjectSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema)]).optional()
}).strict();
export const WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInput>;
export const WorkspaceUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectZodSchema = makeSchema();
