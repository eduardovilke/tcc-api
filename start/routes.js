'use strict'

const Route = use('Route')

Route.get('/', () => {
  return {status: 'online'}
})

Route.post('/sessions', 'SessionController.create')

Route.resource('cliente', 'ClienteController').apiOnly()
Route.resource('prestador', 'PrestadorController').apiOnly()
Route.resource('avaliacao', 'AvaliacaoController').apiOnly()
Route.resource('situacao', 'SituacaoController').apiOnly()
Route.resource('tipo', 'TipoController').apiOnly()
Route.resource('usuario', 'UserController').apiOnly()

Route.post('servico', 'ServicoController.store')
Route.get('servico/:user?/:types?', 'ServicoController.show')
Route.get('servico', 'ServicoController.index')
Route.put('servico/:id', 'ServicoController.update')
Route.delete('servico', 'ServicoController.destroy')

