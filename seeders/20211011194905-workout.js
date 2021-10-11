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
          img: 'https://imgur.com/q64p0Vq',
          type: 'Body Weight Training',
          title: 'Triceps Dip',
          description:
            'Grip rings or parallel bars with your arms straight. Keeping your chest up, bend your elbows to lower your body as far as your shoulders allow. Press back up powerfully to return to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/q64p0Vq',
          type: 'Weight Training',
          title: 'Incline Dumbbell Press',
          description:
            'Lie on an incline bench holding a dumbbell in each hand by your shoulders. Press the weights up until your arms are straight, then lower them back to the start under control.',
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
