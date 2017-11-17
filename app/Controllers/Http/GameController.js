'use strict'

const fs = require('fs')
const getSize = use('App/Managers/ReadSizeRecursive')

class GameController {

  async index ({ request, response }) {
    return [
      {name: 'Test'},
      {name: 'Test'},
      {name: 'Test'},
      {name: 'Test'},
    ]
  }
  
  async show ({ request, response }) {
    response.send(request.params)
  }
  
  async store ({ request, response }) {
    response.send()
  }
  
  async update ({ request, response }) {
    response.send(request.params)
  }
  
  async destroy ({ request, response }) {
    response.send(request.params)
  }

	async render ({ request, response }) {
		const path = './app/'
    const files = new Array();

    await fs.readdirSync('.').forEach(async (file) => {
      await getSize(file, (err, content) => {
        files.push({
          name: file,
          size: content
        })
      })
    })

    response.send(files)
	}
}

module.exports = GameController
