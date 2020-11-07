'use strict'

const User = use("App/Models/User")
class UserController {
  async index(){
    return await User.all()
  }

  async show({ params }){
    const user = await User.findOrFail(params.id)
    return user
  }

  async store({ request }){
    const data = request.all()
    const user = await User.create(data)
    return user
    
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
      "senha",
      "tipo_usuario"
    ])
    const user = await User.findOrFail(params.id)
    user.merge(data)
    await user.save()
    return user
  }

  async destroy({params}){
    const user = await User.findOrFail(params.id)
    return await user.delete()

  }
}

module.exports = UserController
