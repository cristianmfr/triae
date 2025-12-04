import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberScalarWhereInputObjectSchema as WorkspaceMemberScalarWhereInputObjectSchema } from './WorkspaceMemberScalarWhereInput.schema';
import { WorkspaceMemberUpdateManyMutationInputObjectSchema as WorkspaceMemberUpdateManyMutationInputObjectSchema } from './WorkspaceMemberUpdateManyMutationInput.schema';
import { WorkspaceMemberUncheckedUpdateManyWithoutUserInputObjectSchema as WorkspaceMemberUncheckedUpdateManyWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WorkspaceMemberUpdateManyMutationInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const WorkspaceMemberUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateManyWithWhereWithoutUserInput>;
export const WorkspaceMemberUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
