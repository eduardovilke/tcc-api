'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SituacaoSchema extends Schema {
  up () {
    this.create('situacao', (table) => {
      table.increments()
      table.string('nome', 255)
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('situacao')
  }
}

module.exports = SituacaoSchema
