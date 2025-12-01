export class NotFoundError extends Error {
  constructor(entity?: string) {
    super(entity ? `${entity} not found.` : 'Not found.')
  }
}
