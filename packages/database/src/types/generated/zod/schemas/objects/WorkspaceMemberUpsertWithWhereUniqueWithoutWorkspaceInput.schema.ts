import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUpdateWithoutWorkspaceInput.schema';
import { WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput.schema';
import { WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateWithoutWorkspaceInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema)])
}).strict();
export const WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput>;
export const WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputObjectZodSchema = makeSchema();
