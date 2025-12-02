import z from 'zod'

export const CredentialsSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export const CreateSessionSchema = z.object({
  payload: z.string(),
  token: z.string(),
  userId: z.string(),
  sessionId: z.string(),
})

export type CredentialsInput = z.infer<typeof CredentialsSchema>
export type CreateSessionInput = z.infer<typeof CreateSessionSchema>
