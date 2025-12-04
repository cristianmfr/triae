import * as z from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'phone', 'company', 'image', 'userId', 'createdAt', 'updatedAt'])

export type ProfileScalarFieldEnum = z.infer<typeof ProfileScalarFieldEnumSchema>;