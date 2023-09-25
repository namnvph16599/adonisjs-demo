// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async getUsers(ctx) {
    return [
      {
        id: 1,
        name: 'Ngo Van Nam',
      },
      {
        id: 2,
        name: 'Ngo Van Nam 2',
      },
    ]
  }

  public async getUser(ctx) {
    const { id } = ctx.request.params()
    if (!id) return 'Not found'
    const users = [
      {
        id: 1,
        name: 'Ngo Van Nam',
      },
      {
        id: 2,
        name: 'Ngo Van Nam 2',
      },
    ]
    return users.find((u) => u.id === id)
  }
}
