export interface User {
  id: string
  username: string
  email: string
  password: string | null
  active: boolean
  verified: boolean
  hasWorkspaces: boolean
  createdAt: Date
  updatedAt: Date
}
