export interface SessionData {
  user: {
    id: string
    email: string
    username: string
    name: string
    createdAt: number
  }
  session: {
    token: string
    userId: string
    expiresAt: number
    createdAt: number
  }
}

export interface RefreshToken {
  token: string
  expiresAt: number
}
