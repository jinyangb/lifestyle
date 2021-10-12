const Router = require('express').Router()
const controller = require('../controllers/WorkoutController')

Router.get('/', controller.GetWorkouts)
// Router.get('/:workout_id', controller.GetWorkouts)
// Router.post('/', controller.CreateUser)
// Router.put('/:post_id', controller.UpdateUser)
// Router.delete('/:post_id', controller.DeleteUser)

module.exports = Router
