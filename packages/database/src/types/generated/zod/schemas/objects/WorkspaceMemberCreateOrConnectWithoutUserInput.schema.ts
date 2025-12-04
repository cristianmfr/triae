import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberWhereUniqueInputObjectSchema as WorkspaceMemberWhereUniqueInputObjectSchema } from './WorkspaceMemberWhereUniqueInput.schema';
import { WorkspaceMemberCreateWithoutUserInputObjectSchema as WorkspaceMemberCreateWithoutUserInputObjectSchema } from './WorkspaceMemberCreateWithoutUserInput.schema';
import { WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema as WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WorkspaceMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WorkspaceMemberCreateWithoutUserInputObjectSchema), z.lazy(() => WorkspaceMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WorkspaceMemberCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateOrConnectWithoutUserInput>;
export const WorkspaceMemberCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
