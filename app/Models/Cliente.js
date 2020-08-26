'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Cliente extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.senha) {
        userInstance.senha = await Hash.make(userInstance.senha)
      }
    })
  }

  servico(){
    return this.belongsToMany('App/Models/Servico')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Cliente
