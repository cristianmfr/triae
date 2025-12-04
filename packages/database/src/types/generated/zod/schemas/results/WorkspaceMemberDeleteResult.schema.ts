import * as z from 'zod';
export const WorkspaceMemberDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  role: z.unknown(),
  active: z.boolean(),
  userId: z.string(),
  user: z.unknown(),
  workspaceId: z.string(),
  workspace: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
}));