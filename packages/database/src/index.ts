import { PrismaPg } from '@prisma/adapter-pg'
import { env } from '@triae/env'
import { PrismaClient } from './types/generated/client'

const adapterPostgres = new PrismaPg({ connectionString: env.DATABASE_URL })
const prismaClient = new PrismaClient({ adapter: adapterPostgres })

export { prismaClient as prisma }
