import * as z from 'zod';

export const WorkspaceScalarFieldEnumSchema = z.enum(['id', 'name', 'slug', 'description', 'createdAt', 'updatedAt'])

export type WorkspaceScalarFieldEnum = z.infer<typeof WorkspaceScalarFieldEnumSchema>;