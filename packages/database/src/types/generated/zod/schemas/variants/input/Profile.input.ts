import * as z from 'zod';
// prettier-ignore
export const ProfileInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    company: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProfileInputType = z.infer<typeof ProfileInputSchema>;
