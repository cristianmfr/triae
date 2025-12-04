import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserCreateWithoutWorkspaceMembersInputObjectSchema as UserCreateWithoutWorkspaceMembersInputObjectSchema } from './UserCreateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInput.schema';
import { UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema as UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema } from './UserCreateOrConnectWithoutWorkspaceMembersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspaceMembersInput>;
export const UserCreateNestedOneWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
