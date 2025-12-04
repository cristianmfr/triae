import * as z from 'zod';
import type { Prisma } from '../../../client';
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
  updatedAt: z.coerce.date().optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutProfileInput>;
export const UserCreateWithoutProfileInputObjectZodSchema = makeSchema();
