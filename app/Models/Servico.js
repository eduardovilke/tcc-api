'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Servico extends Model {
    avaliacao (){
        return this.hasOne('App/Models/avaliacao')
    }

    user(){
        return this.hasOne('App/Models/User')
    }

    prestadorServico(){
        return this.hasOne('App/Models/PrestadorServico')
    }

    situacao(){
        return this.hasOne('App/Models/Situacao')
    }
    
    tipos_servico(){
        return this.hasOne('App/Models/TiposServico')
    }
}

module.exports = Servico
