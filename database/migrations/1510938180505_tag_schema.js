'use strict'

const Schema = use('Schema')

class TagsSchema extends Schema {
  up () {
    this.create('tags', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.integer('category_id').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('tag')
  }
}

module.exports = TagsSchema
