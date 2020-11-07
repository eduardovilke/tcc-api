'use strict'

const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
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
      table.string('tipo_usuario', 60)
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = UsersSchema