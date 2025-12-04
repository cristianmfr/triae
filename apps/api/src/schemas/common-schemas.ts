import z from 'zod'

export const FindUniqueParamsSchema = z.object({
  value: z.string(),
})

export const IdParamsSchema = z.object({
  id: z.string(),
})

export const NoContentResponseSchema = z.null()

export const OperationResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
})
