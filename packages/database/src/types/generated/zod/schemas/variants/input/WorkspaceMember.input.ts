import * as z from 'zod';
import { WorkspaceRoleSchema } from '../../enums/WorkspaceRole.schema';
// prettier-ignore
export const WorkspaceMemberInputSchema = z.object({
    id: z.string(),
    role: WorkspaceRoleSchema,
    active: z.boolean(),
    userId: z.string(),
    user: z.unknown(),
    workspaceId: z.string(),
    workspace: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkspaceMemberInputType = z.infer<typeof WorkspaceMemberInputSchema>;
