import * as z from 'zod';

export const WorkspaceRoleSchema = z.enum(['OWNER', 'ADMIN', 'USER', 'GUEST'])

export type WorkspaceRole = z.infer<typeof WorkspaceRoleSchema>;