import fastifyCookie from '@fastify/cookie'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
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
import { errorHandler } from './common/error-handler'
import { authRoutes } from './modules/auth/auth.routes'
import { usersRoutes } from './modules/users/users.routes'

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

  app.register(fastifyJwt, {
    secret: env.JWT_SECRET_KEY,
  })

  app.register(fastifyCookie, {
    secret: env.JWT_SECRET_KEY,
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

  app.listen({ port: env.PORT, host: env.HOST })

  return app
}

export { buildApp as app }
