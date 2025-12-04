import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUpdateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutWorkspaceMembersInput.schema';
import { WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)]),
  where: z.lazy(() => WorkspaceWhereInputObjectSchema).optional()
}).strict();
export const WorkspaceUpsertWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpsertWithoutWorkspaceMembersInput>;
export const WorkspaceUpsertWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
