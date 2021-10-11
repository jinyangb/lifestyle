const { Diet } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetDietDetails = async (req, res) => {
  try {
    const diet = await Diet.findByPk(req.params.diet_id)
    res.send(diet)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDietDetails
}
