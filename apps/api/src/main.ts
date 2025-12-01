import { env } from '@triae/env'
import { FastifyError } from 'fastify'
import { app } from './app'

async function bootstrap() {
  try {
    app()
    console.log(`HTTP server running on ${env.HOST}:${env.PORT}`)
    console.log(`Docs available at prefix ${env.HOST}:${env.PORT}/docs`)
  } catch (error) {
    const err = error as FastifyError
    console.error(err.message)
    process.exit(1)
  }
}
bootstrap()
