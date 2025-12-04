import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserCreateWithoutWorkspaceMembersInputObjectSchema as UserCreateWithoutWorkspaceMembersInputObjectSchema } from './UserCreateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInput.schema';
import { UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema as UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema } from './UserCreateOrConnectWithoutWorkspaceMembersInput.schema';
import { UserUpsertWithoutWorkspaceMembersInputObjectSchema as UserUpsertWithoutWorkspaceMembersInputObjectSchema } from './UserUpsertWithoutWorkspaceMembersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema as UserUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWorkspaceMembersInput.schema';
import { UserUpdateWithoutWorkspaceMembersInputObjectSchema as UserUpdateWithoutWorkspaceMembersInputObjectSchema } from './UserUpdateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWorkspaceMembersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUpdateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspaceMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspaceMembersNestedInput>;
export const UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputObjectZodSchema = makeSchema();
