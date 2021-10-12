const { Workout } = require('../models')
// const { Op, literal, fn, col } = require('sequelize')

const GetWorkouts = async (req, res) => {
  try {
    const recents = await Workout.findAll()
    res.send(recents)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetWorkouts
}
