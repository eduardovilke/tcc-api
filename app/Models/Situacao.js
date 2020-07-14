'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Situacao extends Model {
    servico (){
        return this.hasMany('App/Models/Servico')
    }
}

module.exports = Situacao
