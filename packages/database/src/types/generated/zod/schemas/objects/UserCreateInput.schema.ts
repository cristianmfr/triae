import * as z from 'zod';
import type { Prisma } from '../../../client';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema as ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema as WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema } from './WorkspaceMemberCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string().optional().nullable(),
  active: z.boolean().optional(),
  verified: z.boolean().optional(),
  hasWorkspaces: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
