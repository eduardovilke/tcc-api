'use strict'

const Cliente = use("App/Models/Cliente")
class ClienteController {
  async index(){
    return await Cliente.all()
  }

  async store({ request }){
    const data = request.only([
      "nome",
      "sobrenome",
      "email",
      "telefone",
      "cep",
      "cidade",
      "rua",
      "bairro",
      "numero",
      "senha"
    ])
    const cliente = await Cliente.create(data)
    return cliente
  }

  async show({ params }){
    const cliente = await Cliente.findOrFail(params.id)
  }

  async update(){

  }

  async delete(){

  }
}

module.exports = ClienteController
