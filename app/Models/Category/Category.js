'use strict'

const Model = use('Model')

class Category extends Model {
	tags() {
		return this.hasMany('App/Models/Tags')
	}
}

module.exports = Category
