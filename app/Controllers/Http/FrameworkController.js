'use strict'

class FrameworkController {

  async index ({ request, response }) {
    response.send()
  }
	
  async show ({ request, response }) {
  	return request
    response.send()
  }
	
  async store ({ request, response }) {
    response.send()
  }
	
  async update ({ request, response }) {
    response.send()
  }
	
  async destroy ({ request, response }) {
    response.send()
  }
}

module.exports = FrameworkController
