'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class PrestadorServico extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
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

module.exports = PrestadorServico
