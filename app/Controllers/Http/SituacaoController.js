'use strict'

const Situacao = use("App/Models/Situacao")

class SituacaoController {

  async index(){
    return await Situacao.all()
  }

  async show({ params }){
    const situacao = await Situacao.findOrFail(params.id)
    return situacao
  }

  async store({ request }){
    const data = request.all()
    const situacao = await Situacao.create(data)
    return situacao
  }

  async update({params, request}){
    const data = request.only([
      "nome",
    ])
    const situacao = await Situacao.findOrFail(params.id)
    situacao.merge(data)
    await situacao.save()
    return situacao
  }

  async destroy({params}){
    const situacao = await Situaca.findOrFail(params.id)
    return await situacao.delete()
  }
  
}

module.exports = SituacaoController
