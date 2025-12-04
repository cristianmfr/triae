import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateManyWorkspaceInputObjectSchema as WorkspaceMemberCreateManyWorkspaceInputObjectSchema } from './WorkspaceMemberCreateManyWorkspaceInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputObjectSchema), z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectSchema: z.ZodType<Prisma.WorkspaceMemberCreateManyWorkspaceInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberCreateManyWorkspaceInputEnvelope>;
export const WorkspaceMemberCreateManyWorkspaceInputEnvelopeObjectZodSchema = makeSchema();
