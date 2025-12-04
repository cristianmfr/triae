import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceSelectObjectSchema as WorkspaceSelectObjectSchema } from './WorkspaceSelect.schema';
import { WorkspaceIncludeObjectSchema as WorkspaceIncludeObjectSchema } from './WorkspaceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkspaceSelectObjectSchema).optional(),
  include: z.lazy(() => WorkspaceIncludeObjectSchema).optional()
}).strict();
export const WorkspaceArgsObjectSchema = makeSchema();
export const WorkspaceArgsObjectZodSchema = makeSchema();
