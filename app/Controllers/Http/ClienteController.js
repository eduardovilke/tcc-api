'use strict'

const Cliente = use("App/Models/Cliente")
class ClienteController {
  async index(){
    return await Cliente.all()
  }

  async show({ params }){
    const cliente = await Cliente.findOrFail(params.id)
    return cliente
  }

  async store({ request }){
    const data = request.all()
    const cliente = await Cliente.create(data)
    return cliente
  }

  async update({params, request}){
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
    const cliente = await Cliente.findOrFail(params.id)
    cliente.merge(data)
    await cliente.save()
    return cliente
  }

  async destroy({params}){
    const cliente = await Cliente.findOrFail(params.id)
    return await cliente.delete()

  }
}

module.exports = ClienteController
