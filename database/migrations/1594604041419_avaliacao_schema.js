'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacao', (table) => {
      table.increments()
      table.string('descricao', 255)
      table.integer('nota')
      table.integer('servico_id').unsigned().references('id').inTable('servicos').notNullable()
    })
  }

  down () {
    this.drop('avaliacao')
  }
}

module.exports = AvaliacaoSchema
