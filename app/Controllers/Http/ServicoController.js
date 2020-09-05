'use strict'

const Servico = use("App/Models/Servico")

class ServicoController {
	async index(){
    return await Servico.all()
  }

  async show({ params }){
    const servico = await Servico.findOrFail(params.id)
    return servico
  }

  async store({ request }){
    const data = request.all()
    const servico = await Servico.create(data)
    return servico
  }

  async update({params, request}){
    const data = request.only([
      "descricao_avaliacao",
      "nota_avaliacao",
      "situacao_id",
      "prestador_id"
    ])
    const servico = await Servico.findOrFail(params.id)
    servico.merge(data)
    await servico.save()
    return servico
  }

  async destroy({params}){
    const servico = await Servico.findOrFail(params.id)
    return await servico.delete()
  }
}

module.exports = ServicoController
