'use strict'

const Schema = use('Schema')

class SituacaosSchema extends Schema {
  up () {
    this.create('situacaos', (table) => {
      table.increments()
      table.string('nome', 255)
      table.timestamps('updated_at')
    })
  }

  down () {
    this.drop('situacaos')
  }
}

module.exports = SituacaosSchema
