'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
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
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
