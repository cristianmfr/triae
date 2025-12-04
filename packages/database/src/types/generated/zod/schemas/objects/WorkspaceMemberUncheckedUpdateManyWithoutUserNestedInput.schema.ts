import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateWithoutUserInputObjectSchema as WorkspaceMemberCreateWithoutUserInputObjectSchema } from './WorkspaceMemberCreateWithoutUserInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInput.schema';
import { WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema as WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema } from './WorkspaceMemberCreateOrConnectWithoutUserInput.schema';
import { WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema as WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput.schema';
import { WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema as WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema } from './WorkspaceMemberCreateManyUserInputEnvelope.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema as WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput.schema';
import { WorkspaceMemberUpdateManyWithWhereWithoutUserInputObjectSchema as WorkspaceMemberUpdateManyWithWhereWithoutUserInputObjectSchema } from './WorkspaceMemberUpdateManyWithWhereWithoutUserInput.schema';
import { WorkspaceMemberScalarWhereInputObjectSchema as WorkspaceMemberScalarWhereInputObjectSchema } from './WorkspaceMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput>;
export const WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
