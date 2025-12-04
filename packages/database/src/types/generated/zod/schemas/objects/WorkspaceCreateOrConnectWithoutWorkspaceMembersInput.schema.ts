import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema';
import { WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)])
}).strict();
export const WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutWorkspaceMembersInput>;
export const WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
