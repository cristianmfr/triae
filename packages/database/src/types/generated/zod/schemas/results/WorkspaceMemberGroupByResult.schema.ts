import * as z from 'zod';
export const WorkspaceMemberGroupByResultSchema = z.array(z.object({
  id: z.string(),
  active: z.boolean(),
  userId: z.string(),
  workspaceId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    role: z.number(),
    active: z.number(),
    userId: z.number(),
    user: z.number(),
    workspaceId: z.number(),
    workspace: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    workspaceId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    workspaceId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));