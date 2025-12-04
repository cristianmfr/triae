import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateWithoutWorkspaceInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInput.schema';
import { WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateOrConnectWithoutWorkspaceInput.schema';
import { WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema as WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput.schema';
import { WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema as WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema } from './WorkspaceMemberCreateManyWorkspaceInputEnvelope.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema as WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput.schema';
import { WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputObjectSchema as WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput.schema';
import { WorkspaceMemberScalarWhereInputObjectSchema as WorkspaceMemberScalarWhereInputObjectSchema } from './WorkspaceMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema).array(), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema), z.lazy(() => WorkspaceMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput>;
export const WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputObjectZodSchema = makeSchema();
