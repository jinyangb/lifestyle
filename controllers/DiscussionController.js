const { Discussion } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetDiscussions = async (req, res) => {
  try {
    const recents = await Discussion.findAll({
      order: [['createdAt', 'DESC']]
    })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const CreateDiscussion = async (req, res) => {
  try {
    const disc = await Discussion.create(req.body)
    res.send(disc)
  } catch (error) {
    throw error
  }
}

const UpdateDiscussion = async (req, res) => {
  try {
    let discussionId = parseInt(req.params.discussion_id)
    let updatedDiscussion = await Discussion.update(req.body, {
      where: { id: discussionId },
      returning: true
    })
    res.send(updatedDiscussion)
  } catch (error) {
    throw error
  }
}

const DeleteDiscussion = async (req, res) => {
  try {
    let discussionId = parseInt(req.params.discussion_id)
    await Discussion.destroy({ where: { id: discussionId } })
    res.send({ message: `Deleted discussion with an id of ${discussionId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDiscussions,
  CreateDiscussion,
  UpdateDiscussion,
  DeleteDiscussion
}
