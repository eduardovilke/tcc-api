'use strict'

class SessionController {
  async create ({ request, auth }) { 
    const { email, senha } = request.all()
    return await auth.attempt(email, senha)
  }
}

module.exports = SessionController
