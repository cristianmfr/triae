import * as z from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  active: z.boolean(),
  verified: z.boolean(),
  hasWorkspaces: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    username: z.number(),
    email: z.number(),
    password: z.number(),
    active: z.number(),
    verified: z.number(),
    hasWorkspaces: z.number(),
    profile: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    workspaceMembers: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    username: z.string().nullable(),
    email: z.string().nullable(),
    password: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));