import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string().nullable(),
    active: z.boolean(),
    verified: z.boolean(),
    hasWorkspaces: z.boolean(),
    profile: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workspaceMembers: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
