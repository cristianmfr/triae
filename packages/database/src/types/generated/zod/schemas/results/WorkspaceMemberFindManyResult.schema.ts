import * as z from 'zod';
export const WorkspaceMemberFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  role: z.unknown(),
  active: z.boolean(),
  userId: z.string(),
  user: z.unknown(),
  workspaceId: z.string(),
  workspace: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});