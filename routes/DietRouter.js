const Router = require('express').Router()
const controller = require('../controllers/DietController')

// Router.get('/trending', controller.GetPopularPosts)
// Router.get('/recents', controller.GetRecentPosts)
// Implement these routes
Router.get('/diets/', controller.GetDiets)
// Router.post('/:user_id', controller.CreatePost)
// Router.put('/:post_id', controller.UpdatePost)
// Router.delete('/:post_id', controller.DeletePost)
// Implement these routes
module.exports = Router
