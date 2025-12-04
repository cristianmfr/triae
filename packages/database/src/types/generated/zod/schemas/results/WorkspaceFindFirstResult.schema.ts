import * as z from 'zod';
export const WorkspaceFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  workspaceMembers: z.array(z.unknown())
}));