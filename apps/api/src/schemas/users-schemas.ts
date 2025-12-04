import z from 'zod'

export const ProfileSchema = z.object({
  id: z.string(),
  email: z.string().nullable(),
  phone: z.string().nullable(),
  company: z.string().nullable(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string().nullable(),
  active: z.boolean(),
  verified: z.boolean(),
  profile: ProfileSchema.nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const CreateUserInputSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string().optional(),
  name: z.string(),
  phone: z.string().optional(),
  company: z.string().optional(),
  image: z.string().optional(),
})

export const UpdateUserInputSchema = CreateUserInputSchema.partial()

export const GetUserQueryResponse = z.object({
  user: UserSchema,
})

export const CreateUserResponseSchema = z.object({
  createdUser: UserSchema,
})

export const UpdateUserResponseSchema = z.object({
  updatedUser: UserSchema,
})

export type User = z.infer<typeof UserSchema>
export type Profile = z.infer<typeof ProfileSchema>

export type CreateUserInput = z.infer<typeof CreateUserInputSchema>
export type UpdateUserInput = z.infer<typeof UpdateUserInputSchema>

export type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>
export type UpdateUserResponse = z.infer<typeof UpdateUserResponseSchema>
