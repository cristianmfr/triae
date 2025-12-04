import * as z from 'zod';
import { WorkspaceRoleSchema } from '../../enums/WorkspaceRole.schema';
// prettier-ignore
export const WorkspaceMemberModelSchema = z.object({
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

export type WorkspaceMemberPureType = z.infer<typeof WorkspaceMemberModelSchema>;
