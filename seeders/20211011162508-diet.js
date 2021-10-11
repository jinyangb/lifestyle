'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'diets',
      [
        {
          img: 'https://imgur.com/6AR81l6',
          type: 'Vegan',
          title: 'Maple Tempeh',
          description:
            '8 ounces tempeh sliced in half then down center to make thin square slices. 1 Tbsp maple syrup, grade B. 2 tsp tamari dash of fine black pepper. For Sandwich: 3 slices sourdough bread* (the long wide slices from the middle part of a bakery round) 1 ripe avocado, sliced and splashed with lemon juice 1 small tomato, sliced 3/4 cup sauerkraut 3 rings of onion vegan mayo + Dijon mustard for spreading optional: add some melted vegan cheese if you dare)',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/a/7VSqfvN',
          type: 'Vegan',
          title: 'Lemon Fettuccine Alfredo',
          description:
            'Ingredients: 12 ounces eggless fettuccine, 2 cups unsweetened soy or almond milk, 4 ounces soy cream cheese, 3 tablespoons blanched sliced almonds, 3 tablespoons nutritional yeast, plus more for sprinkling, 1 teaspoon finely grated lemon zest, Kosher salt and freshly ground black pepper, 2 tablespoons extra-virgin olive oil, 3 cloves garlic, finely chopped, 1/2 cup loosely packed parsley leaves, chopped. Directions: 1) Bring a large pot of water to a boil and cook the fettuccine according to package directions. Strain, reserving 1 cup of the pasta cooking water. 2) Add the soy milk, soy cream cheese, almonds, nutritional yeast, lemon zest, 1 teaspoon salt and 1/4 teaspoon pepper to a blender and process until smooth. 3) Heat the oil and garlic in a large skillet over medium heat, stirring until the garlic just starts to sizzle and softens, about 1 minute. Add the soy milk mixture and 1/2 cup of the reserved pasta water, bring to a simmer and cook until thick and creamy, about 8 minutes. Remove from the heat, add the fettuccini and parsley and toss to combine. Thin out with a little more pasta water if needed. 4) Divide the pasta among four bowls and sprinkle each with some nutritional yeast and a few grinds of pepper.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/a/7VSqfvN',
          type: 'Vegan',
          title: 'Lemon Fettuccine Alfredo',
          description:
            'Ingredients: 12 ounces eggless fettuccine, 2 cups unsweetened soy or almond milk, 4 ounces soy cream cheese, 3 tablespoons blanched sliced almonds, 3 tablespoons nutritional yeast, plus more for sprinkling, 1 teaspoon finely grated lemon zest, Kosher salt and freshly ground black pepper, 2 tablespoons extra-virgin olive oil, 3 cloves garlic, finely chopped, 1/2 cup loosely packed parsley leaves, chopped. Directions: 1) Bring a large pot of water to a boil and cook the fettuccine according to package directions. Strain, reserving 1 cup of the pasta cooking water. 2) Add the soy milk, soy cream cheese, almonds, nutritional yeast, lemon zest, 1 teaspoon salt and 1/4 teaspoon pepper to a blender and process until smooth. 3) Heat the oil and garlic in a large skillet over medium heat, stirring until the garlic just starts to sizzle and softens, about 1 minute. Add the soy milk mixture and 1/2 cup of the reserved pasta water, bring to a simmer and cook until thick and creamy, about 8 minutes. Remove from the heat, add the fettuccini and parsley and toss to combine. Thin out with a little more pasta water if needed. 4) Divide the pasta among four bowls and sprinkle each with some nutritional yeast and a few grinds of pepper.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('diets', null, {})
  }
}
