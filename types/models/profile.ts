export interface Profile {
  id: string
  name: string
  email: string | null
  phone: string | null
  company: string | null
  image: string | null
  userId: string
  createdAt: Date
  updatedAt: Date
}

