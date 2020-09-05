'use strict'

const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacao', (table) => {
      table.increments()
      table.string('descricao', 255)
      table.integer('nota')
      table.integer('servico_id').unsigned().references('id').inTable('servicos').notNullable()
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('avaliacao')
  }
}

module.exports = AvaliacaoSchema
