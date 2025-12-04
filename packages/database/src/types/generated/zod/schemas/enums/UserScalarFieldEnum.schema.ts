import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'username', 'email', 'password', 'active', 'verified', 'hasWorkspaces', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;