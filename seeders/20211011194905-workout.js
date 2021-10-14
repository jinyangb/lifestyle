'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'workouts',
      [
        {
          img: 'https://i.imgur.com/V3DrJPM.jpg',
          type: 'Weight Training',
          title: 'Bench Press',
          description:
            'Lie on a flat bench holding a barbell with your hands slightly wider than shoulder-width apart. Brace your core, then lower the bar towards your chest. Press it back up to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/q64p0Vq.jpg',
          type: 'Body Weight Training',
          title: 'Triceps Dip',
          description:
            'Grip rings or parallel bars with your arms straight. Keeping your chest up, bend your elbows to lower your body as far as your shoulders allow. Press back up powerfully to return to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/AegXzVh.jpg',
          type: 'Weight Training',
          title: 'Incline Dumbbell Press',
          description:
            'Lie on an incline bench holding a dumbbell in each hand by your shoulders. Press the weights up until your arms are straight, then lower them back to the start under control.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/qNVVI4u.jpg',
          type: 'Weight Training',
          title: 'Incline Dumbbell Flye',
          description:
            'Lie on an incline bench holding a dumbbell in each hand above your face, with your palms facing and a slight bend in your elbows. Lower them to the sides, then bring them back to the top.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/wa2pi7U.jpg',
          type: 'Weight Training',
          title: 'Tricep Extension',
          description:
            'Stand tall holding a dumbbell over your head with both hands, arms straight. Keeping your chest up, lower the weight behind your head, then raise it back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/iUi1AQg.jpg',
          type: 'Body Weight Training',
          title: 'Pull-up',
          description:
            'Hold a pull-up bar with an overhand grip, hands shoulder-width apart. Brace your core, then pull yourself up until your lower chest touches the bar. Lower until your arms are straight again.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/w5rNqro.jpg',
          type: 'Weight Training',
          title: 'Bent-over Row',
          description:
            'Hold a barbell using an overhand grip, hands just outside your legs, and lean forward from the hips. Bend your knees slightly and brace your core, then pull the bar up, leading with your elbows. Lower it back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/BJITw0t.jpg',
          type: 'Weight Training',
          title: 'Biceps Curl',
          description:
            'Stand with dumbbells by your sides, palms facing forwards. Keeping your elbows tucked in, curl the weights up, squeezing your biceps at the top. Lower them back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/B8cnTvo.jpg',
          type: 'Weight Training',
          title: 'Back Squat',
          description:
            'Stand tall, holding a bar across the back of your shoulders. Keeping your chest up and core braced, squat down as deep as you can. Drive back up through your heels to return to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/DFU0iCr.jpg',
          type: 'Weight Training',
          title: 'Seated Dumbbell Press',
          description:
            'Sit on an upright bench with a dumbbell in each hand at shoulder height. Keeping your chest up, press the weights directly overhead until your arms are straight, then lower them back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/Q3mQEur.jpg',
          type: 'Weight Training',
          title: 'Lateral Raise',
          description:
            'Stand tall, holding a light dumbbell in each hand with palms facing. Keeping your chest up and a bend in your elbows, raise the weights out to shoulder height, then lower back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/6WmNu2K.jpg',
          type: 'Weight Training',
          title: 'Reverse Flye',
          description:
            'Bend forward from the hips holding a light dumbbell in each hand with palms facing. Keeping a slight bend in your elbows, raise the weights out to shoulder height, then lower back to the start.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/QkU8g0O.png',
          type: 'Cardio',
          title: 'Mountain Climbers',
          description:
            'Start in high plank position, with shoulders over wrists and core tight and activated. You can be on your toes with straight legs or on your knees. Draw right knee into chest, then return to high plank with both feet on the floor. Repeat with left leg. Continue alternating legs as quickly as you can. The faster you go, the more intense the exercise.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/DHlEQg0.jpg',
          type: 'Cardio',
          title: 'Burpees',
          description:
            'Stand with feet hip-width apart and make sure your core is engaged. Jump up, then immediately drop to the floor, placing hands on the floor and shooting feet back so you’re in a high plank position. Do a push-up. Quickly jump feet back to hands and, in one movement, stand and jump up.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://i.imgur.com/6r1c1OQ.png',
          type: 'Cardio',
          title: 'Running',
          description:
            'Don’t hunch your shoulders. Focus on keeping them down–and away from your ears! Pull your shoulders back, like you are imagining squeezing a pen between your shoulder blades–this also helps maintain endurance. This comes more naturally for some people rather than others. Personally, I have a tendency to run with my hands clamped up in a fist, so I have to be intentional about relaxing them–it can create tension in your shoulders and back. I remember my high school cross country coach always telling me to run like I was holding a potato chip between my thumb and forefinger. While every runner has a natural strike, trying to nurture a mid-foot strike is the best way to land. A heel strike and forefoot strike are common–but focus on landing on the middle of your foot regularly. If you lift your knees too high during your run, your running will be bouncy and your body will absorb more impact with each stride. Run with a slight bend in your knee to limit your the impact of training on hard surfaces. There’s a place for high knee action in running drills, but during your run, keep it low and lift your knees forward, not upwards. Don’t ever lean back or stay completely upright while running. Lean forward slightly, hinged at the hips.',
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
