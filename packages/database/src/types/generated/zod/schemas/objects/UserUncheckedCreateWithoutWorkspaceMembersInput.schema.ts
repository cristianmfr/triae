import * as z from 'zod';
import type { Prisma } from '../../../client';
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string().optional().nullable(),
  active: z.boolean().optional(),
  verified: z.boolean().optional(),
  hasWorkspaces: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutWorkspaceMembersInput>;
export const UserUncheckedCreateWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
