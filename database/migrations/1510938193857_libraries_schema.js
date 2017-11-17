'use strict'

const Schema = use('Schema')

class LibrariesSchema extends Schema {
  up () {
    this.create('libraries', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('libraries')
  }
}

module.exports = LibrariesSchema
