import * as z from 'zod';
import type { Prisma } from '../../../client';


const makeSchema = () => z.object({
  userId: z.string(),
  workspaceId: z.string()
}).strict();
export const WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInput>;
export const WorkspaceMemberUserIdWorkspaceIdCompoundUniqueInputObjectZodSchema = makeSchema();
