import * as z from 'zod';
export const UserFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string().optional(),
  active: z.boolean(),
  verified: z.boolean(),
  hasWorkspaces: z.boolean(),
  profile: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  workspaceMembers: z.array(z.unknown())
}));