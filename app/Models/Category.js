'use strict'

const Model = use('Model')

class Category extends Model {

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  posts() {
    return this.hasMany('App/Models/Post')
  }

  tags() {
    return this.hasMany('App/Models/Tag')
  }
}

module.exports = Category
