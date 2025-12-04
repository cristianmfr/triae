import * as z from 'zod';
// prettier-ignore
export const WorkspaceResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workspaceMembers: z.array(z.unknown())
}).strict();

export type WorkspaceResultType = z.infer<typeof WorkspaceResultSchema>;
