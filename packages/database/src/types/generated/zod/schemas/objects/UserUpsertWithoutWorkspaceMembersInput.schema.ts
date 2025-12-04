import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserUpdateWithoutWorkspaceMembersInputObjectSchema as UserUpdateWithoutWorkspaceMembersInputObjectSchema } from './UserUpdateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceMembersInput.schema';
import { UserCreateWithoutWorkspaceMembersInputObjectSchema as UserCreateWithoutWorkspaceMembersInputObjectSchema } from './UserCreateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWorkspaceMembersInput>;
export const UserUpsertWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
