import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceUncheckedCreateWithoutWorkspaceMembersInput.schema';
import { WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema as WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema } from './WorkspaceCreateOrConnectWithoutWorkspaceMembersInput.schema';
import { WorkspaceWhereUniqueInputObjectSchema as WorkspaceWhereUniqueInputObjectSchema } from './WorkspaceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => WorkspaceUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutWorkspaceMembersInputObjectSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputObjectSchema).optional()
}).strict();
export const WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutWorkspaceMembersInput>;
export const WorkspaceCreateNestedOneWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
