'use strict'

const Tipo = use("App/Models/TiposServico")

class TipoController {
    async index(){
        return await Tipo.all()
      }
    
      async show({ params }){
        const tipo = await Tipo.findOrFail(params.id)
        return tipo
      }
    
      async store({ request }){
        const data = request.all()
        const tipo = await Tipo.create(data)
        return tipo
      }
    
      async update({params, request}){
        const data = request.only([
            "nome",
            "descricao"
        ])
        const tipo = await Tipo.findOrFail(params.id)
        tipo.merge(data)
        await tipo.save()
        return tipo
      }
    
      async destroy({params}){
        const tipo = await Tipo.findOrFail(params.id)
        return await tipo.delete()
    
      }
}

module.exports = TipoController
