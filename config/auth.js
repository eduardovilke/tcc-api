'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Authenticator
  |--------------------------------------------------------------------------
  |
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  |
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  |
  */
  authenticator: 'session',

  /*
  |--------------------------------------------------------------------------
  | Session
  |--------------------------------------------------------------------------
  |
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  |
  */
  session: {
    serializer: 'lucid',
    model: 'App/Models/Cliente',
    scheme: 'session',
    uid: 'email',
    senha: 'senha'
  },

  /*
  |--------------------------------------------------------------------------
  | Basic Auth
  |--------------------------------------------------------------------------
  |
  | The basic auth authenticator uses basic auth header to authenticate a
  | user.
  |
  | NOTE:
  | This scheme is not persistent and users are supposed to pass
  | login credentials on each request.
  |
  */
  basic: {
    serializer: 'lucid',
    model: 'App/Models/Cliente',
    scheme: 'basic',
    uid: 'email',
    senha: 'senha'
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  |
  */
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/Cliente',
    scheme: 'jwt',
    uid: 'email',
    senha: 'senha',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Api
  |--------------------------------------------------------------------------
  |
  | The Api scheme makes use of API personal tokens to authenticate a user.
  |
  */
  api: {
    serializer: 'lucid',
    model: 'App/Models/Cliente',
    scheme: 'api',
    uid: 'email',
    senha: 'senha'
  }
}
