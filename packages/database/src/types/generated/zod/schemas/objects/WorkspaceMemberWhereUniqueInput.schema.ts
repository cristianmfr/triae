import * as z from 'zod';
import type { Prisma } from '../../../client';
import { WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInputObjectSchema as WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInputObjectSchema } from './WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId_workspaceId: z.lazy(() => WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const WorkspaceMemberWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberWhereUniqueInput>;
export const WorkspaceMemberWhereUniqueInputObjectZodSchema = makeSchema();
