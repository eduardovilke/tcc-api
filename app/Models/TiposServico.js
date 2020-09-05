'use strict'

const Model = use('Model')

class TiposServico extends Model {
    servico (){
        return this.belongsToMany('App/Models/Servico')
    }
}

module.exports = TiposServico
