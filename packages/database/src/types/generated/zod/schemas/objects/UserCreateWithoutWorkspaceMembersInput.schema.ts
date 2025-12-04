import * as z from 'zod';
import type { Prisma } from '../../../client';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema as ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema'

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
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWorkspaceMembersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWorkspaceMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWorkspaceMembersInput>;
export const UserCreateWithoutWorkspaceMembersInputObjectZodSchema = makeSchema();
