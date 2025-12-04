import { FastifyInstance } from 'fastify'
import z, { ZodError } from 'zod'
import { BadRequestError } from './errors/bad-request-error'
import { ConflictError } from './errors/conflict-error'
import { NotFoundError } from './errors/not-found-error'
import { UnauthorizedError } from './errors/unauthorized-error'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, _request, reply) => {
  if (error instanceof ZodError) {
    reply.status(400).send({
      message: 'Validation error',
      errors: z.treeifyError(error).errors,
    })
  }

  if (error instanceof NotFoundError) {
    reply.status(404).send({
      message: error.message,
    })
  }

  if (error instanceof BadRequestError) {
    reply.status(400).send({
      message: error.message,
    })
  }

  if (error instanceof UnauthorizedError) {
    reply.status(401).send({
      message: error.message,
    })
  }

  if (error instanceof ConflictError) {
    reply.status(409).send({
      message: error.message,
    })
  }

  console.error(error)

  reply.status(500).send({ message: 'Internal server error' })
}
