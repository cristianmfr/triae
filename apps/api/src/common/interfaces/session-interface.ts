export interface RefreshToken {
  token: string
  expiresAt: number
}

export interface SessionUser {
  id: string
  email: string
  username: string
  name?: string
  createdAt: Date
}

export interface Session {
  token: string
  userId: string
  expiresAt: number
  createdAt: number
  updatedAt?: number
}

export interface SessionData {
  user: SessionUser
  session: Session
}
