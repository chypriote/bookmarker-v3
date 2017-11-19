'use strict'

const Post = use('App/Models/Post')
const Category = use('App/Models/Category')

class GameController {
  constructor() {
    this.category = 1;
  }

  async index ({ request, response }) {
    const game = await Category.find(this.category)
    return await game.posts().fetch()
  }

  async show ({ request, response }) {
    const game = await Category.find(this.category)
    return await game.posts().find(request.params.id)
  }

  async store ({ request, response }) {
    const game = new Post()
    const category = await Category.find(this.category)

    game.name = request.body.name

    return await category.posts().save(game)
  }

  async update ({ request, response }) {
    response.send(request.params)
  }

  async destroy ({ request, response }) {
    response.send(request.params)
  }
}

module.exports = GameController
