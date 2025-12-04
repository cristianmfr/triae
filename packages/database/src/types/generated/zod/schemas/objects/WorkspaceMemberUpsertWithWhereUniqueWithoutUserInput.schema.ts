import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberUpdateWithoutUserInputObjectSchema as WorkspaceMemberUpdateWithoutUserInputObjectSchema } from './WorkspaceMemberUpdateWithoutUserInput.schema';
import { WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema as WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedUpdateWithoutUserInput.schema';
import { WorkspaceMemberCreateWithoutUserInputObjectSchema as WorkspaceMemberCreateWithoutUserInputObjectSchema } from './WorkspaceMemberCreateWithoutUserInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WorkspaceMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput>;
export const WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
