const Router = require('express').Router()
const controller = require('../controllers/DiscussionController')

Router.get('/', controller.GetDiscussions)
Router.post('/', controller.CreateDiscussion)
Router.put('/:discussion_id', controller.UpdateDiscussion)
Router.delete('/:discussion_id', controller.DeleteDiscussion)

module.exports = Router
