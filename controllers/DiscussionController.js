const { Discussions } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetRecentDiscussions = async (req, res) => {
  try {
    const recents = await Discussions.findAll({
      order: [['created_at', 'DESC']]
    })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const GetDiscussionDetails = async (req, res) => {
  try {
    const discussion = await Discussions.findByPk(req.params.discussion_id)
    res.send(discussion)
  } catch (error) {
    throw error
  }
}

const CreateDiscussion = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.discussion_id)
    let discussionBody = {
      ownerId,
      ...req.body
    }
    let discussion = await Discussions.create(discussionBody)
    res.send(discussion)
  } catch (error) {
    throw error
  }
}

const UpdateDiscussion = async (req, res) => {
  try {
    let discussionId = parseInt(req.params.discussion_id)
    let updatedDiscussion = await Discussions.update(req.body, {
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
    await Discussions.destroy({ where: { id: discussionId } })
    res.send({ message: `Deleted discussion with an id of ${discussionId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecentDiscussions,
  GetDiscussionDetails,
  CreateDiscussion,
  UpdateDiscussion,
  DeleteDiscussion
}
