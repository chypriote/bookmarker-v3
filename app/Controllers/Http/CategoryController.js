'use strict'

const Database = use('Database')
const Category = use('App/Models/Category')

class CategoryController {
  async index ({ request, response }) {
    return await Category.all()
  }

  async show ({ request, response }) {
    return await Category.find('id', request.params.id)
  }

  async store ({ request, response }) {
    return await Database.table(this.TABLE_NAME).insert(request.body)
  }

  async update ({ request, response }) {
    response.send(request.params)
  }

  async destroy ({ request, response }) {
    response.send(request.params)
  }
}

module.exports = CategoryController
