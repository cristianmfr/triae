import z from 'zod'

export const profileSchema = z.object({
  id: z.string(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  company: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string().nullable(),
  active: z.boolean(),
  verified: z.boolean(),
  profile: profileSchema.nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const createUserSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string().optional(),
  name: z.string(),
  phone: z.string().optional(),
  company: z.string().optional(),
  image: z.string().optional(),
})

export const updateUserSchema = createUserSchema.partial()

export type User = z.infer<typeof userSchema>
export type Profile = z.infer<typeof profileSchema>

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
