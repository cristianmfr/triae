import { UserModelSchema } from '@triae/database/schemas'
import z from 'zod'

export type User = z.infer<typeof UserModelSchema>
