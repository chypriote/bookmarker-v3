'use strict'

const Model = use('Model')

class Tag extends Model {

  category() {
    return this.hasOne('App/Models/Category')
  }

  posts() {
    return this.belongsToMany('App/Models/Post')
  }
}

module.exports = Tag
