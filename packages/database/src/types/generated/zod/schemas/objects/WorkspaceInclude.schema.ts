import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberFindManySchema as WorkspaceMemberFindManySchema } from '../findManyWorkspaceMember.schema';
import { WorkspaceCountOutputTypeArgsObjectSchema as WorkspaceCountOutputTypeArgsObjectSchema } from './WorkspaceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  workspaceMembers: z.union([z.boolean(), z.lazy(() => WorkspaceMemberFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WorkspaceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WorkspaceIncludeObjectSchema: z.ZodType<Prisma.WorkspaceInclude> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceInclude>;
export const WorkspaceIncludeObjectZodSchema = makeSchema();
