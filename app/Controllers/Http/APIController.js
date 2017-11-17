'use strict'

const Database = use('Database')

class APIController {
  constructor() {
    this.TABLE_NAME = '';
  }

  async index ({ request, response }) {
    return await Database.table(this.TABLE_NAME)
  }
  
  async show ({ request, response }) {
    return await Database.table(this.TABLE_NAME).where('id', '=', request.params.id).first()
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

module.exports = APIController
