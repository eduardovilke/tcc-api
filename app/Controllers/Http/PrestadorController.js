'use strict'

const ClienteController = require("./ClienteController")

const Prestador = use("App/Models/PrestadorServico")
class PrestadorController {
  async index(){
    return await Prestador.all()
  }

  async show({ params }){
    const prestador = await Prestador.findOrFail(params.id)
    return prestador
  }

  async store({ request }){
    const data = request.all()
    const prestador = await Prestador.create(data)
    return prestador
  }

  async update({ params, request }){
    const data = request.only([
      "nome",
      "sobrenome",
      "telefone",
      "cep",
      "cidade",
      "rua",
      "bairro",
      "numero",
      "senha"
    ])
    const prestador = await Prestador.findOrFail(params.id)
    prestador.merge(data)
    await prestador.save()
    return prestador
  }

  async destroy({ params }){
    const prestador = await Prestador.findOrFail(params.id)
    return await prestador.delete()
  }
}

module.exports = PrestadorController
