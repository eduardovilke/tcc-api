'use strict'

const Prestador = use("App/Models/PrestadorServico")
class PrestadorController {
  async index(){
    return await Prestador.all()
  }

  async show({ params }){
    const prestador = await Presador.findOrFail(params.id)
    return prestador
  }

  async store({ request }){
    const data = request.all()
    const prestador = await Prestador.create(data)
    return prestador
  }

  async update(){

  }

  async delete(){

  }
}

module.exports = PrestadorController
