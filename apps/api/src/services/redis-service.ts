import { env } from '@triae/env'
import Redis from 'ioredis'

class RedisService {
  private redis = new Redis(env.REDIS_URL)

  async get(key: string) {
    return await this.redis.get(key)
  }

  async set(key: string, data: string, exp: number) {
    await this.redis.set(key, data, 'EX', exp)
  }

  async del(key: string) {
    await this.redis.del(key)
  }
}

export default new RedisService()
