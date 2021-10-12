const { Diet } = require('../models')
// const { Op, literal, fn, col } = require('sequelize')

const GetDiet = async (req, res) => {
  try {
    const recents = await Diet.findAll()
    res.send(recents)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDiet
}
