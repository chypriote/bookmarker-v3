'use strict'

const fs = require('fs')
const getSize = use('App/Managers/ReadSizeRecursive')
const APIController = use('App/Controllers/Http/APIController')


class GameController extends APIController {
  constructor() {
    super()
    this.TABLE_NAME = 'games'
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
