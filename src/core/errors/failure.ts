export interface Failure {
  message: string
}

export class FailToCreateUser extends Error implements Failure {
  constructor () {
    super('Failure to create user.')
    this.name = 'FailToCreateUser'
  }
}

export class UserNotFound extends Error implements Failure {
  constructor () {
    super('User not found.')
    this.name = 'UserNotFound'
  }
}

export class ServerError extends Error implements Failure {
  constructor (reason: string) {
    super('Server error: ' + reason + '.')
    this.name = 'ServerError'
  }
}
