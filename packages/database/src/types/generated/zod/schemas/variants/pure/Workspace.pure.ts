import * as z from 'zod';
// prettier-ignore
export const WorkspaceModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    workspaceMembers: z.array(z.unknown())
}).strict();

export type WorkspacePureType = z.infer<typeof WorkspaceModelSchema>;
