'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SituacaoSchema extends Schema {
  up () {
    this.create('situacao', (table) => {
      table.increments()
      table.string('nome', 255)
    })
  }

  down () {
    this.drop('situacao')
  }
}

module.exports = SituacaoSchema
