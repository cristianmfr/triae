import z from 'zod'

export const credentialsSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export const createSessionSchema = z.object({
  payload: z.string(),
  token: z.string(),
  userId: z.string(),
  sessionId: z.string(),
})

export type CredentialsInput = z.infer<typeof credentialsSchema>
export type CreateSessionInput = z.infer<typeof createSessionSchema>
