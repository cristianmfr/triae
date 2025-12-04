import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema as WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema } from './WorkspaceMemberCreateNestedManyWithoutWorkspaceInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  workspaceMembers: z.lazy(() => WorkspaceMemberCreateNestedManyWithoutWorkspaceInputObjectSchema).optional()
}).strict();
export const WorkspaceCreateInputObjectSchema: z.ZodType<Prisma.WorkspaceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceCreateInput>;
export const WorkspaceCreateInputObjectZodSchema = makeSchema();
