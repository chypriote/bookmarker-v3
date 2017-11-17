'use strict'

const Schema = use('Schema')

class FrameworksSchema extends Schema {
  up () {
    this.create('frameworks', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('frameworks')
  }
}

module.exports = FrameworksSchema
