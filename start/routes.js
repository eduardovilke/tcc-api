'use strict'

const Route = use('Route')

Route.get('/', () => {
  return {status: 'online'}
})

Route.post('/sessions', 'SessionController.create')

Route.resource('cliente', 'ClienteController').apiOnly()
Route.resource('prestador', 'PrestadorController').apiOnly()
Route.resource('avaliacao', 'AvaliacaoController').apiOnly()
Route.resource('servico', 'ServicoController').apiOnly()
Route.resource('situacao', 'SituacaoController').apiOnly()
Route.resource('tipo', 'TipoController').apiOnly()

