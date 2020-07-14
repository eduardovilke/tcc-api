'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Avaliacao extends Model {
    
    servico (){
        return this.hasOne('App/Models/Servico')
    }
}

module.exports = Avaliacao
