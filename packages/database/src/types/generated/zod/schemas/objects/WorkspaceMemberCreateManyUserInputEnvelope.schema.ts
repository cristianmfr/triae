import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateManyUserInputObjectSchema as WorkspaceMemberCreateManyUserInputObjectSchema } from './WorkspaceMemberCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkspaceMemberCreateManyUserInputObjectSchema), z.lazy(() => WorkspaceMemberCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkspaceMemberCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateManyUserInputEnvelope>;
export const WorkspaceMemberCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
