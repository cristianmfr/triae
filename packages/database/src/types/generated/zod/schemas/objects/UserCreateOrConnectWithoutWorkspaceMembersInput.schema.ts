import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWorkspaceMembersInputObjectSchema as UserCreateWithoutWorkspaceMembersInputObjectSchema } from './UserCreateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWorkspaceMembersInput>;
export const UserCreateOrConnectWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
