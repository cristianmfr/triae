import * as z from 'zod';
import type { Prisma } from '../../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WorkspaceArgsObjectSchema as WorkspaceArgsObjectSchema } from './WorkspaceArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  workspace: z.union([z.boolean(), z.lazy(() => WorkspaceArgsObjectSchema)]).optional()
}).strict();
export const WorkspaceMemberIncludeObjectSchema: z.ZodType<Prisma.WorkspaceMemberInclude> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberInclude>;
export const WorkspaceMemberIncludeObjectZodSchema = makeSchema();
