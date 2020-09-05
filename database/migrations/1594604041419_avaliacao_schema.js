'use strict'

const Schema = use('Schema')

class AvaliacaosSchema extends Schema {
  up () {
    this.create('avaliacaos', (table) => {
      table.increments()
      table.string('descricao', 255)
      table.integer('nota')
      table.integer('servico_id').unsigned().references('id').inTable('servicos').notNullable()
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('avaliacaos')
  }
}

module.exports = AvaliacaosSchema
