'use strict'

const Cliente = use('App/Models/Cliente')

class SessionController {
  async create ({ request, auth }) { 
    const { email, senha } = request.all()
    let token = await auth.attempt(email, senha)
    let user = await Cliente.query().where('email', email).fetch()
    return {token, user};
  }
}

module.exports = SessionController
