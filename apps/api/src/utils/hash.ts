import { compare, hash } from 'bcryptjs'

const HASH_SALT_ROUNDS = 12

export async function hashPassword(password: string) {
  return await hash(password, HASH_SALT_ROUNDS)
}

export async function comparePasswords(
  plainPassword: string,
  hashPassword: string,
) {
  return await compare(plainPassword, hashPassword)
}
