import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceCountOutputTypeSelectObjectSchema as WorkspaceCountOutputTypeSelectObjectSchema } from './WorkspaceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkspaceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WorkspaceCountOutputTypeArgsObjectSchema = makeSchema();
export const WorkspaceCountOutputTypeArgsObjectZodSchema = makeSchema();
