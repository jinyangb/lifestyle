'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workout.init(
    {
      type: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Workout',
      tableName: 'workouts'
    }
  )
  return Workout
}
