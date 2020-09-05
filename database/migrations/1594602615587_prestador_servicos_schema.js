'use strict'

const Schema = use('Schema')

class PrestadorServicoSchema extends Schema {
  up () {
    this.create('prestador_servicos', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('sobrenome', 255)
      table.string('email', 255).unique()
      table.string('telefone', 255)
      table.string('cep', 9)
      table.string('cidade', 255)
      table.string('rua', 255)
      table.string('bairro', 255)
      table.string('numero', 255)
      table.string('senha', 60).notNullable()
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('prestador_servicos')
  }
}

module.exports = PrestadorServicoSchema
