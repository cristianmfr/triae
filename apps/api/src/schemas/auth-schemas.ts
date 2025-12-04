import z from 'zod'

export const CredentialsInputSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export const CreateSessionInputSchema = z.object({
  payload: z.string(),
  token: z.string(),
  userId: z.string(),
  sessionId: z.string(),
})

export const HasSessionResponse = z.object({
  authenticated: z.boolean(),
})

export type CredentialsInput = z.infer<typeof CredentialsInputSchema>
export type CreateSessionInput = z.infer<typeof CreateSessionInputSchema>
