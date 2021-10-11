'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'workouts',
      [
        {
          img: 'https://imgur.com/V3DrJPM',
          type: 'Weight Training',
          title: 'Bench Press',
          description:
            'Lie on a flat bench holding a barbell with your hands slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your chest. Press it back up to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/V3DrJPM',
          type: 'Weight Training',
          title: 'Bench Press',
          description:
            'Lie on a flat bench holding a barbell with your hands slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your chest. Press it back up to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workouts', null, {})
  }
}
