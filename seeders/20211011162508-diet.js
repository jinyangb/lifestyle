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
          img: 'https://imgur.com/gMPsg3P',
          type: 'Vegan',
          title: 'Tofu and Spinach Scramble',
          description:
            'Ingredients: One 14-ounce package firm tofu, drained and cut into 1/2-inch cubes, 1/2 teaspoon ground turmeric, Kosher salt and freshly ground black pepper, 1/8 teaspoon ground cayenne pepper, optional, 2 tablespoons extra-virgin olive oil, 3 scallions, thinly sliced, green and white parts separated, 5 ounces fresh spinach, chopped (about 5 packed cups), 1 to 2 teaspoons fresh lemon juice, 1 cup grape tomatoes, halved, 1/2 cup fresh basil, roughly chopped. Directions: 1) Combine the tofu, turmeric, 1/4 teaspoon salt, 1/2 teaspoon black pepper and cayenne, if using, in a medium bowl. Toss well to combine and set aside. 2) Heat the oil in a large nonstick skillet over medium-high heat. Add the scallion whites and cook, stirring, until soft, about 1 minute. Add the tofu mixture and cook, stirring occasionally, until the tofu is lightly browned and resembles scrambled eggs, about 5 minutes. 3) Add the spinach, lemon juice and 1/2 teaspoon salt and stir until the spinach is wilted, about 1 minute. Add the tomatoes and scallion greens and stir until the tomatoes are just heated through and begin to soften, about 1 minute. Remove from the heat, add the basil and stir to combine. Season with salt and pepper.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/F1YUm0t',
          type: 'Vegan',
          title: 'Tacos',
          description:
            'Ingredients: 1 tsp vegetable oil, half onion sliced, 2 tsp chopped seeded jalapeno chile, 12 ounce package soy chorizo, 16 ounce refriend beans, corn tortilla, diced onions, chopped cilantro. Directions: 1) Heat oil in large nonstick skillet over medium heat. Add sliced onion and jalapeño; sauté until tender, about 10 minutes. Add soy chorizo and cook until beginning to brown in spots, stirring often, about 5 minutes. 2) Meanwhile, cook beans in heavy small saucepan over low heat until heated through, stirring occasionally. 3) Stack 2 warm tortillas for each of 6 tacos. Spread scant 2 tablespoons beans over each stack. Top with soy chorizo mixture, dividing equally. Sprinkle with diced onion and cilantro.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/a/rOZ1663',
          type: 'Vegan',
          title: 'Italian-Style Spaghetti Squash with Tempeh',
          description:
            'Ingredients: 12 ounces tempeh, cut into small cubes, 2 tablespoons reduced-sodium tamari, 1/4 cup mirin, 2 cloves garlic, finely chopped, 1 (2.5-pound) spaghetti squash, halved lengthwise and seeded, 1 tablespoon canola oil, 1 (25.0-ounce) jar pasta sauce, 2 cups small broccoli florets, 1 cup packed baby spinach. Directions: 1) Preheat the oven to 375°F. 2) In a medium bowl, gently toss together tempeh, tamari, mirin and garlic; set aside to let marinate for 30 minutes. 3) Meanwhile, arrange squash halves, cut sides down, in a large baking dish. 4) Pour 1/2 cup water into dish and bake until just tender, 30 to 45 minutes. 5) Remove from oven, turn over squash and set aside to let cool slightly. 6) Heat oil in a large skillet over medium high heat. 7) Drain tempeh, then add it to the skillet and cook, stirring occasionally, until golden brown, 7 to 8 minutes; transfer to a plate and keep warm. 8) Meanwhile, heat pasta sauce in a medium saucepan over medium heat until hot throughout then add broccoli and cook until just tender, about 5 minutes. 9) Stir in spinach and remove pot from the heat. 10) Using a fork, scrape strands of spaghetti squash onto a serving platter. Spoon hot pasta sauce and broccoli over squash, top with tempeh and serve.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/YI7xnja',
          type: 'Vegetarian',
          title: 'Shakshuka',
          description:
            'Ingredients: 1 tbsp of olive oil, shallot, diced, 2 cloves of garlic, minced, 1 bell pepper, diced, 1 28oz can of plum tomatoes, 1/4 tsp salt, 1/4 tsp cumin, 1/4 tsp paprika, 1 chipotle pepper in adobo sauce, 4 eggs, feta cheese, parsley to garnish, chopped baby spinach to garnish. Directions: 1) Add a tbsp of olive oil to a large sauté pan 2) On low-medium heat, add your diced shallot and let cook for about 2 minutes. Add a pinch of salt to let it sweat. 3) Add your garlic and let it cook for about 1 minute more. Do not let the garlic burn. 4) Add your can of tomatoes and bell pepper and mix all ingredients together. 5) Add salt, cumin, paprika, and chipotle pepper. 6) Turn heat down to low and cover pan. Let simmer for about 30 minutes or until tomatoes cook down. Stir occasionally. 7) Once the tomatoes have cooked down, use a wooden spoon to carve out a little hole for the first egg in the sauce. Crack the egg and carefully fill it in the hole. Repeat with 3 other eggs. 8) Cover with lid and let eggs cook for about 8 minutes or until the whites of the eggs have cooked. 9) Garnish with chopped parsley, spinach, and feta and serve.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/YI7xnja',
          type: 'Vegetarian',
          title: 'Spicy Black Bean Burger',
          description:
            'Ingredients: 15 oz. Black Beans, 2 Whole Burger Buns, 1 Red Bell Pepper, 1 Yellow Onion, 1/2 cup Fresh Cilantro, 1/2 cup Italian Breadcrumbs, 1/2 cup Grated Parmesan Cheese, 1 tbsp. Minced Garlic, 1 Large Organic Egg, 2 Provolone Cheese Slices, Burger Seasoning: 1 tsp. Oregano, 1/2 tsp. Black Pepper, 1/2 tsp. Garlic Powder, 1/2 tsp. Paprika, 1/2 tsp. Chili Powder, 1/4 tsp. Adobo All-Purpose Seasoning, 1/4 tsp. Crushed Red Pepper Flakes, Dash Ground Cayenne Red Pepper. Avocado Sauce: 1 Medium Avocado, 1/4 cup Mayo, 1 tsp. Lemon Juice, 1 tbsp. Parsley Flakes, 1/2 tsp. Minced Garlic, 1/2 tsp. Black Pepper, 1/4 tsp. Himalayan Salt. Directions: 1) Drain canned black beans and allow to sit for 10 to 15 minutes. Add black beans to a large bowl and mash using a fork or potato masher. Set to the side. 2) Cut your onion and red bell pepper into large pieces half and add to food processor blending to a fine chop. Drain any excess liquid and add to the same bowl as the beans. 3) Add remaining burger ingredients and seasonings, mix, cover, and refrigerate for 30 minutes. 4) Form bean mixture into patties and cook at medium to high heat for 5 minutes per side adding a cheese slice once flipped. 5) For the avocado sauce, remove the seed and skin from the avocado. Blend with avocado sauce ingredients. 6) Build your burger by adding lettuce, tomatoes, and avocado sauce.',
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
