import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  company: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ProfileUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateInput>;
export const ProfileUncheckedCreateInputObjectZodSchema = makeSchema();
