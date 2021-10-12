const Router = require('express').Router()
const controller = require('../controllers/DietController')

Router.get('/', controller.GetDiet)

module.exports = Router
