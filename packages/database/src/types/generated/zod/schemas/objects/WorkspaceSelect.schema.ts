import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberFindManySchema as WorkspaceMemberFindManySchema } from '../findManyWorkspaceMember.schema';
import { WorkspaceCountOutputTypeArgsObjectSchema as WorkspaceCountOutputTypeArgsObjectSchema } from './WorkspaceCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  workspaceMembers: z.union([z.boolean(), z.lazy(() => WorkspaceMemberFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WorkspaceCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WorkspaceSelectObjectSchema: z.ZodType<Prisma.WorkspaceSelect> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceSelect>;
export const WorkspaceSelectObjectZodSchema = makeSchema();
