import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateWithoutWorkspaceInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema)])
}).strict();
export const WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateOrConnectWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateOrConnectWithoutWorkspaceInput>;
export const WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectZodSchema = makeSchema();
