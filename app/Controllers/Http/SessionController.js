'use strict'

const User = use('App/Models/User')

class SessionController {
  async create ({ request, auth }) { 
    const { email, senha } = request.all()
    let token = await auth.attempt(email, senha)
    let user = await User.query().where('email', email).fetch()
    return {token, user};
  }
}

module.exports = SessionController
