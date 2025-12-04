import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberScalarWhereInputObjectSchema as WorkspaceMemberScalarWhereInputObjectSchema } from './WorkspaceMemberScalarWhereInput.schema';
import { WorkspaceMemberUpdateManyMutationInputObjectSchema as WorkspaceMemberUpdateManyMutationInputObjectSchema } from './WorkspaceMemberUpdateManyMutationInput.schema';
import { WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkspaceMemberUpdateManyMutationInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInputObjectSchema)])
}).strict();
export const WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput>;
export const WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputObjectZodSchema = makeSchema();
