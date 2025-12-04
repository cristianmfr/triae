import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberUpdateWithoutUserInputObjectSchema as WorkspaceMemberUpdateWithoutUserInputObjectSchema } from './WorkspaceMemberUpdateWithoutUserInput.schema';
import { WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema as WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WorkspaceMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput>;
export const WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
