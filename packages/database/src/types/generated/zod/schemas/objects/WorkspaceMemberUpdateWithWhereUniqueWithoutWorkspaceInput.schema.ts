import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUpdateWithoutWorkspaceInput.schema';
import { WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkspaceMemberUpdateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutWorkspaceInputObjectSchema)])
}).strict();
export const WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput>;
export const WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputObjectZodSchema = makeSchema();
