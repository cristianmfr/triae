import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateWithoutWorkspaceInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInput.schema';
import { WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateOrConnectWithoutWorkspaceInput.schema';
import { WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema as WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema } from './WorkspaceMemberCreateManyWorkspaceInputEnvelope.schema';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputObjectSchema).array(), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema), z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateNestedManyWithoutWorkspaceInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateNestedManyWithoutWorkspaceInput>;
export const WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectZodSchema = makeSchema();
