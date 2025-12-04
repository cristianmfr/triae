import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateWithoutUserInputObjectSchema as WorkspaceMemberCreateWithoutUserInputObjectSchema } from './WorkspaceMemberCreateWithoutUserInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInput.schema';
import { WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema as WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema } from './WorkspaceMemberCreateOrConnectWithoutUserInput.schema';
import { WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema as WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema } from './WorkspaceMemberCreateManyUserInputEnvelope.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateNestedManyWithoutUserInput>;
export const WorkspaceMemberCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
