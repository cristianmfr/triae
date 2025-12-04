import * as z from 'zod';
// prettier-ignore
export const ProfileResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    company: z.string().nullable(),
    image: z.string().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProfileResultType = z.infer<typeof ProfileResultSchema>;
