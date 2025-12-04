import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberSelectObjectSchema as WorkspaceMemberSelectObjectSchema } from './WorkspaceMemberSelect.schema';
import { WorkspaceMemberIncludeObjectSchema as WorkspaceMemberIncludeObjectSchema } from './WorkspaceMemberInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WorkspaceMemberSelectObjectSchema).optional(),
  include: z.lazy(() => WorkspaceMemberIncludeObjectSchema).optional()
}).strict();
export const WorkspaceMemberArgsObjectSchema = makeSchema();
export const WorkspaceMemberArgsObjectZodSchema = makeSchema();
