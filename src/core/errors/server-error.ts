export class ServerError extends Error implements Failure {
  constructor (reason: string) {
    super('Server error: ' + reason + '.')
    this.name = 'ServerError'
  }
}
