const { Diet } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

// const GetPopularPosts = async (req, res) => {
//   try {
//     const popular = await Posts.findAll({
//       order: [['likes', 'DESC']], //Order By Likes in descending order
//       attributes: [
//         // Select Specific Attributes
//         'id',
//         'content',
//         'likes',
//         [fn('COUNT', col('comments.id')), 'commentCount'] //Count amount of associated comments
//       ],
//       where: { likes: { [Op.gt]: 3000 } }, // Where likes is greater than 3000
//       include: [
//         { model: User, as: 'owner', attributes: ['name', 'id'] },
//         { model: Comments, as: 'comments', attributes: [] } //Leave attributes empty, we only need the model to execute the count
//       ],
//       group: ['Posts.id', 'owner.id'] // Group the information by it's respective id
//     })
//     res.send(popular)
//   } catch (error) {
//     throw error
//   }
// }

// const GetRecentPosts = async (req, res) => {
//   try {
//     const recents = await Posts.findAll({ order: [['created_at', 'DESC']] })
//     res.send(recents)
//   } catch (error) {
//     throw error
//   }
// }

const GetDietDetails = async (req, res) => {
  try {
    const diet = await Diets.findByPk(req.params.diet_id)
    res.send(diet)
  } catch (error) {
    throw error
  }
}

// const CreatePost = async (req, res) => {
//   try {
//     let ownerId = parseInt(req.params.user_id)
//     let PostBody = {
//       ownerId,
//       ...req.body
//     }
//     let post = await Posts.create(PostBody)
//     res.send(post)
//   } catch (error) {
//     throw error
//   }
// }

// const UpdatePost = async (req, res) => {
//   try {
//     let postId = parseInt(req.params.post_id)
//     let updatedPost = await Posts.update(req.body, {
//       where: { id: postId },
//       returning: true
//     })
//     res.send(updatedPost)
//   } catch (error) {
//     throw error
//   }
// }

// const DeletePost = async (req, res) => {
//   try {
//     let postId = parseInt(req.params.post_id)
//     await Posts.destroy({ where: { id: postId } })
//     res.send({ message: `Deleted post with an id of ${postId}` })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  // GetPopularPosts,
  // GetRecentPosts,
  GetDietDetails
  // CreatePost,
  // UpdatePost,
  // DeletePost
}
