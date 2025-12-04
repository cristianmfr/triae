import * as z from 'zod';
import type { Prisma } from '../../../client';
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
  updatedAt: z.coerce.date().optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput>;
export const UserUncheckedCreateWithoutProfileInputObjectZodSchema = makeSchema();
