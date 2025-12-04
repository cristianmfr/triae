import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWorkspaceMembersInputObjectSchema as UserUpdateWithoutWorkspaceMembersInputObjectSchema } from './UserUpdateWithoutWorkspaceMembersInput.schema';
import { UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema as UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema } from './UserUncheckedUpdateWithoutWorkspaceMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWorkspaceMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMembersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWorkspaceMembersInput>;
export const UserUpdateToOneWithWhereWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
