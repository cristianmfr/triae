import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    PORT: z.coerce.number().default(3333),
    HOST: z.string().default('0.0.0.0'),
    DATABASE_URL: z.url(),
    REDIS_URL: z.url(),
    JWT_SECRET_KEY: z.string().default('default-secret-key'),
  },
  client: {},
  runtimeEnv: {
    PORT: process.env.API_PORT,
    HOST: process.env.API_HOST,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_URL: process.env.REDIS_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
})
