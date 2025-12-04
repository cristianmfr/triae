import * as z from 'zod';
// prettier-ignore
export const WorkspaceInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workspaceMembers: z.array(z.unknown())
}).strict();

export type WorkspaceInputType = z.infer<typeof WorkspaceInputSchema>;
