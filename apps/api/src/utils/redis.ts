import { env } from '@triae/env'
import Redis from 'ioredis'

const redisClient = new Redis(env.REDIS_URL)

export { redisClient as redis }
