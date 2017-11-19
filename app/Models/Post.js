'use strict'

const Model = use('Model')

class Post extends Model {

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  category() {
    return this.belongsTo('App/Models/Category')
  }

  tags() {
    return this.hasMany('App/Models/Tag')
  }
}

module.exports = Post
