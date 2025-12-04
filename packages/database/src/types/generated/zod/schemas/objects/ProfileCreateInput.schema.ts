import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserCreateNestedOneWithoutProfileInputObjectSchema as UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
export const ProfileCreateInputObjectSchema: z.ZodType<Prisma.ProfileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateInput>;
export const ProfileCreateInputObjectZodSchema = makeSchema();
