import { env } from '@triae/env'
import { createHmac, randomBytes } from 'crypto'

interface SessionTokenOptions {
  userId: string
  expiresIn?: number
}

export function createSessionToken(options: SessionTokenOptions): string {
  const { userId, expiresIn = 86400 } = options

  const createdAt = Date.now()
  const expiresAt = createdAt + expiresIn * 1000

  const nonce = randomBytes(16).toString('hex')

  const payload = {
    userId,
    createdAt,
    expiresAt,
    nonce,
  }

  const payloadString = JSON.stringify(payload)

  const hmac = createHmac('sha256', env.JWT_SECRET_KEY)
  hmac.update(payloadString)

  return hmac.digest('base64url')
}

export function verifySessionToken(
  token: string,
  payload: SessionTokenOptions & {
    createdAt: number
    expiresAt: number
    nonce: string
  },
): boolean {
  try {
    if (Date.now() > payload.expiresAt) {
      return false
    }

    const payloadString = JSON.stringify(payload)
    const hmac = createHmac('sha256', env.JWT_SECRET_KEY)
    hmac.update(payloadString)
    const expectedHash = hmac.digest('base64url')

    return token === expectedHash
  } catch {
    return false
  }
}
