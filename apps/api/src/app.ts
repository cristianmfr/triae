import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import { fastifyJwt } from '@fastify/jwt'
import { fastifySwagger } from '@fastify/swagger'
import ScalarApiReference from '@scalar/fastify-api-reference'
import { env } from '@triae/env'
import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { authRoutes } from './routes/auth'
import { usersRoutes } from './routes/users'
import { workspacesRoutes } from './routes/workspaces'
import { errorHandler } from './server/error-handler'
import { auth } from './server/plugins/auth-plugin'

const buildApp = () => {
  const app = fastify().withTypeProvider<ZodTypeProvider>()

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)

  app.setErrorHandler(errorHandler)

  app.register(fastifyCors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })

  app.register(auth)

  app.register(fastifyJwt, {
    secret: env.APP_SECRET,
  })

  app.register(fastifyCookie, {
    secret: env.APP_SECRET,
    hook: 'preHandler',
  })

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Webhook Inspector API',
        description: 'API for capturing and inspecting webhook requests',
        version: '1.0.0',
      },
    },
    transform: jsonSchemaTransform,
  })

  app.register(ScalarApiReference, {
    routePrefix: '/docs',
  })

  app.register(authRoutes)
  app.register(usersRoutes)
  app.register(workspacesRoutes)

  app.listen({ port: env.APP_PORT, host: env.APP_HOST })

  return app
}

export { buildApp as app }
