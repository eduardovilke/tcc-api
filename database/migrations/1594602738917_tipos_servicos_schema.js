'use strict'

const Schema = use('Schema')

class TiposSchema extends Schema {
  up () {
    this.create('tipos_servicos', (table) => {
      table.increments()
      table.string('nome', 255)
      table.string('descricao', 255)
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('tipos_servicos')
  }
}

module.exports = TiposSchema
