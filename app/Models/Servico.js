'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Servico extends Model {
    avaliacao (){
        return this.hasOne('App/Models/avaliacao')
    }

    cliente(){
        return this.hasOne('App/Models/Cliente')
    }

    prestadorServico(){
        return this.hasOne('App/Models/PrestadorServico')
    }

    situacao(){
        return this.hasOne('App/Models/Situacao')
    }
    
    tipo_servico(){
        return this.hasOne('App/Models/TiposServico')
    }
}

module.exports = Servico
