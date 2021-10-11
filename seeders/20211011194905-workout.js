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
          img: 'https://imgur.com/AegXzVh',
          type: 'Weight Training',
          title: 'Incline Dumbbell Press',
          description:
            'Lie on an incline bench holding a dumbbell in each hand by your shoulders. Press the weights up until your arms are straight, then lower them back to the start under control.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/qNVVI4u',
          type: 'Weight Training',
          title: 'Incline Dumbbell Flye',
          description:
            'Lie on an incline bench holding a dumbbell in each hand above your face, with your palms facing and a slight bend in your elbows. Lower them to the sides, then bring them back to the top.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/wa2pi7U',
          type: 'Weight Training',
          title: 'Tricep Extension',
          description:
            'Stand tall holding a dumbbell over your head with both hands, arms straight. Keeping your chest up, lower the weight behind your head, then raise it back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/iUi1AQg',
          type: 'Body Weight Training',
          title: 'Pull-up',
          description:
            'Hold a pull-up bar with an overhand grip, hands shoulder-width apart. Brace your core, then pull yourself up until your lower chest touches the bar. Lower until your arms are straight again.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/w5rNqro',
          type: 'Weight Training',
          title: 'Bent-over Row',
          description:
            'Hold a barbell using an overhand grip, hands just outside your legs, and lean forward from the hips. Bend your knees slightly and brace your core, then pull the bar up, leading with your elbows. Lower it back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/BJITw0t',
          type: 'Weight Training',
          title: 'Biceps Curl',
          description:
            'Stand with dumbbells by your sides, palms facing forwards. Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/B8cnTvo',
          type: 'Weight Training',
          title: 'Back Squat',
          description:
            'Stand tall, holding a bar across the back of your shoulders. Keeping your chest up and core braced, squat down as deep as you can. Drive back up through your heels to return to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/DFU0iCr',
          type: 'Weight Training',
          title: 'Seated Dumbbell Press',
          description:
            'Sit on an upright bench with a dumbbell in each hand at shoulder height. Keeping your chest up, press the weights directly overhead until your arms are straight, then lower them back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/Q3mQEur',
          type: 'Weight Training',
          title: 'Lateral Raise',
          description:
            'Stand tall, holding a light dumbbell in each hand with palms facing. Keeping your chest up and a bend in your elbows, raise the weights out to shoulder height, then lower back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/6WmNu2K',
          type: 'Weight Training',
          title: 'Reverse Flye',
          description:
            'Bend forward from the hips holding a light dumbbell in each hand with palms facing. Keeping a slight bend in your elbows, raise the weights out to shoulder height, then lower back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
        {
          img: 'https://imgur.com/6WmNu2K',
          type: 'Cardio',
          title: 'Mountain Climbers',
          description:
            'Start in high plank position, with shoulders over wrists and core tight and activated. You can be on your toes with straight legs or on your knees. Draw right knee into chest, then return to high plank with both feet on the floor. Repeat with left leg. Continue alternating legs as quickly as you can. The faster you go, the more intense the exercise.',
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
