import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_PORT: z.coerce.number().default(3333),
    APP_HOST: z.string().default('0.0.0.0'),
    APP_SECRET: z.string().default('default-secret-key'),

    DATABASE_URL: z.url(),
    REDIS_URL: z.url(),
  },
  clientPrefix: 'VITE_PUBLIC_',
  client: {
    VITE_PUBLIC_API_URL: z.string(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
