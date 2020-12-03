'use strict'

const Route = use('Route')

Route.get('/', () => {
  return {status: 'online'}
})

Route.resource('usuario', 'UserController').apiOnly()
Route.post('/sessions', 'SessionController.create')

Route.resource('cliente', 'ClienteController').apiOnly().middleware('auth:jwt')
Route.resource('prestador', 'PrestadorController').apiOnly().middleware('auth:jwt')
Route.resource('avaliacao', 'AvaliacaoController').apiOnly().middleware('auth:jwt')
Route.resource('situacao', 'SituacaoController').apiOnly().middleware('auth:jwt')
Route.resource('tipo', 'TipoController').apiOnly().middleware('auth:jwt')

Route.post('servico', 'ServicoController.store').middleware('auth:jwt')
Route.get('servico/:user?/:types?', 'ServicoController.show').middleware('auth:jwt')
Route.get('servico', 'ServicoController.index').middleware('auth:jwt')
Route.put('servico/:id', 'ServicoController.update').middleware('auth:jwt')
Route.delete('servico', 'ServicoController.destroy').middleware('auth:jwt')

