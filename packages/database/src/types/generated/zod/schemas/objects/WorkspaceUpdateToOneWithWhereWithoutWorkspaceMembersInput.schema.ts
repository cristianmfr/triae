import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceWhereInputObjectSchema as WorkspaceWhereInputObjectSchema } from './WorkspaceWhereInput.schema';
import { WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUpdateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedUpdateWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WorkspaceUpdateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema)])
}).strict();
export const WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInput>;
export const WorkspaceUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
