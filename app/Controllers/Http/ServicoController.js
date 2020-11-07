'use strict'

const Servico = use("App/Models/Servico")

class ServicoController {
	async index(){
    return await Servico.all()
  }

  async show({ params }){
    console.log(params)
    if(params.user > 0){
      const servico = await Servico.query().where('cliente_id', params.user).fetch()
      return servico
    }else if(params.types){
      const tipos = params.types.replace('%20', '')
      console.log(tipos)
      const servico = await Servico.query().whereIn('tipos_servico_id', [tipos]).fetch()
      return servico
    }
    
  }

  async store({ request }){
    const data = request.all()
    console.log(data)
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
