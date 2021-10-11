const Router = require('express').Router()
const controller = require('../controllers/DiscussionController')

// Router.get('/trending', controller.GetPopularComments)
// Router.get('/recents', controller.GetRecentComments)
// Implement these routes
Router.get('/view/:discussion_id', controller.GetDiscussionDetails)
Router.post('/:discussion_id', controller.CreateDiscussion)
Router.put('/:discussion_id', controller.UpdateDiscussion)
Router.delete('/:discussion_id', controller.DeleteDiscussion)
// Implement these routes
module.exports = Router
