const Router = require('express').Router()
const WorkoutRouter = require('./WorkoutRouter')
const DietRouter = require('./DietRouter')
const DiscussionRouter = require('./DiscussionRouter')
Router.use('/workouts', WorkoutRouter)
Router.use('/diets', DietRouter)
Router.use('/discussions', DiscussionRouter)
module.exports = Router
