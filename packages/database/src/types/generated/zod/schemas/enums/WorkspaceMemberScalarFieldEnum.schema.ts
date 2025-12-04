import * as z from 'zod';

export const WorkspaceMemberScalarFieldEnumSchema = z.enum(['id', 'role', 'active', 'userId', 'workspaceId', 'createdAt', 'updatedAt'])

export type WorkspaceMemberScalarFieldEnum = z.infer<typeof WorkspaceMemberScalarFieldEnumSchema>;