'use strict'

const Avaliacao = use("App/Models/Avaliacao")
class AvaliacaoController {
  async index(){
    return await Avaliacao.all()
  }

  async show({ params }){
    const avaliacao = await Avaliacao.findOrFail(params.id)
    return avaliacao
  }

  async store({ request }){
    const data = request.all()
    const avaliacao = await Avaliacao.create(data)
    return avaliacao
  }

  async update({params, request}){
    const data = request.only([
      "descricao_avaliacao",
      "nota_avaliacao",
      "situacao_id",
      "prestador_id"
    ])
    const avaliacao = await Avaliacao.findOrFail(params.id)
    avaliacao.merge(data)
    await avaliacao.save()
    return avaliacao
  }

  async destroy({params}){
    const avaliacao = await Avaliacao.findOrFail(params.id)
    return await avaliacao.delete()
  }
}

module.exports = AvaliacaoController
