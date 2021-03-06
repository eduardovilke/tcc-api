'use strict'

const Schema = use('Schema')

class ServicoSchema extends Schema {
  up () {
    this.create('servicos', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('descricao', 255)
      table.string('descricao_avaliacao', 255)
      table.integer('nota_avaliacao')
      table.integer('tipos_servico_id').unsigned().references('id').inTable('tipos_servicos').notNullable()
      table.integer('situacao_id').unsigned().references('id').inTable('situacaos').notNullable()
      table.integer('cliente_id')
      table.integer('prestador_id')
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('servicos')
  }
}

module.exports = ServicoSchema
