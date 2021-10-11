const { Workouts } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetWorkoutDetails = async (req, res) => {
  try {
    const workout = await Workouts.findByPk(req.params.workout_id)
    res.send(workout)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetWorkoutDetails
}
