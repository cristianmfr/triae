import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ProfileCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutUserInput>;
export const ProfileCreateWithoutUserInputObjectZodSchema = makeSchema();
