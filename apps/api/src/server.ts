import { env } from '@triae/env'
import { FastifyError } from 'fastify'
import { app } from './app'

async function server() {
  try {
    app()
    console.log(`API server running on ${env.APP_HOST}:${env.APP_PORT}`)
    console.log(`Docs available at prefix ${env.APP_HOST}:${env.APP_PORT}/docs`)
  } catch (error) {
    const err = error as FastifyError
    console.error(err.message)
    process.exit(1)
  }
}
server()
