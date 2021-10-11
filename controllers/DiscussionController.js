const { Discussions } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

// const GetPopularComments = async (req, res) => {
//   try {
//     const popular = await Comments.findAll({
//       order: [['likes', 'DESC']], //Order By Likes in descending order
//       attributes: [
//         // Select Specific Attributes
//         'id',
//         'content',
//         'likes',
//         [fn('COUNT', col('posts.id')), 'postCount'] //Count amount of associated comments
//       ],
//       where: { likes: { [Op.gt]: 3000 } }, // Where likes is greater than 3000
//       include: [
//         { model: User, as: 'owner', attributes: ['name', 'id'] },
//         { model: Posts, as: 'posts', attributes: [] } //Leave attributes empty, we only need the model to execute the count
//       ],
//       group: ['Posts.id', 'owner.id'] // Group the information by it's respective id
//     })
//     res.send(popular)
//   } catch (error) {
//     throw error
//   }
// }

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
  // GetPopularComments,
  GetRecentDiscussions,
  GetDiscussionDetails,
  CreateDiscussion,
  UpdateDiscussion,
  DeleteDiscussion
}
