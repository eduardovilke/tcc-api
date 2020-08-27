'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoSchema extends Schema {
  up () {
    this.create('tipo_servicos', (table) => {
      table.increments()
      table.string('nome', 255)
      table.string('descricao', 255)
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('tipo_servicos')
  }
}

module.exports = TipoSchema
