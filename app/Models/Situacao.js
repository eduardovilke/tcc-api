'use strict'

const Model = use('Model')

class Situacao extends Model {
  servico (){
    return this.belongsToMany('App/Models/Servico')
  }
}

module.exports = Situacao
