import * as z from 'zod';
import type { Prisma } from '../../../client';
import { ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema as ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './ProfileUncheckedCreateNestedOneWithoutUserInput.schema';
import { WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema as WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  username: z.string(),
  email: z.string(),
  password: z.string().optional().nullable(),
  active: z.boolean().optional(),
  verified: z.boolean().optional(),
  hasWorkspaces: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
