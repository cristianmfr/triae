import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string().optional().nullable(),
    active: z.boolean(),
    verified: z.boolean(),
    hasWorkspaces: z.boolean(),
    profile: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workspaceMembers: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
