import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  phone: z.literal(true).optional(),
  company: z.literal(true).optional(),
  image: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ProfileMinAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMinAggregateInputType>;
export const ProfileMinAggregateInputObjectZodSchema = makeSchema();
