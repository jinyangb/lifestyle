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
          img: 'https://imgur.com/LupCgwO',
          type: 'Vegetarian',
          title: 'Spicy Black Bean Burger',
          description:
            'Ingredients: 15 oz. Black Beans, 2 Whole Burger Buns, 1 Red Bell Pepper, 1 Yellow Onion, 1/2 cup Fresh Cilantro, 1/2 cup Italian Breadcrumbs, 1/2 cup Grated Parmesan Cheese, 1 tbsp. Minced Garlic, 1 Large Organic Egg, 2 Provolone Cheese Slices, Burger Seasoning: 1 tsp. Oregano, 1/2 tsp. Black Pepper, 1/2 tsp. Garlic Powder, 1/2 tsp. Paprika, 1/2 tsp. Chili Powder, 1/4 tsp. Adobo All-Purpose Seasoning, 1/4 tsp. Crushed Red Pepper Flakes, Dash Ground Cayenne Red Pepper. Avocado Sauce: 1 Medium Avocado, 1/4 cup Mayo, 1 tsp. Lemon Juice, 1 tbsp. Parsley Flakes, 1/2 tsp. Minced Garlic, 1/2 tsp. Black Pepper, 1/4 tsp. Himalayan Salt. Directions: 1) Drain canned black beans and allow to sit for 10 to 15 minutes. Add black beans to a large bowl and mash using a fork or potato masher. Set to the side. 2) Cut your onion and red bell pepper into large pieces half and add to food processor blending to a fine chop. Drain any excess liquid and add to the same bowl as the beans. 3) Add remaining burger ingredients and seasonings, mix, cover, and refrigerate for 30 minutes. 4) Form bean mixture into patties and cook at medium to high heat for 5 minutes per side adding a cheese slice once flipped. 5) For the avocado sauce, remove the seed and skin from the avocado. Blend with avocado sauce ingredients. 6) Build your burger by adding lettuce, tomatoes, and avocado sauce.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/Jtv1TId',
          type: 'Vegetarian',
          title: 'Savory Oats',
          description:
            'Ingredients: 2 teaspoons olive oil, 1 tablespoon minced onion, 1 teaspoon minced garlic, 1.5 cups rolled oats, 1 cup vegetable broth, 2 cups water, 1 tablespoon maple syrup. Topping: 1 tablespoon olive oil, 8 oz. white mushrooms, sliced, 1 tablespoon minced onion, 1/8 teaspoon salt, 3 sage leaves, 4 large eggs, 1/4 cup raw pepitas (or any kind of nut), 1/4 cup goat cheese crumbles (or Boursin). Directions: 1) Place olive oil on the bottom of a medium pot. Heat over medium-high/heat. When olive oil is fragrant, add onion and garlic. Saute for 2 minutes. 2) Next, add rolled oats and toast over medium heat for 2 minutes. Finally, add vegetable broth, water, and maple syrup and continue heating over medium heat. Stir every so often and cook or around 10 minutes until thickened. 3) While the oatmeal is thickening, prepare the mushroom topping. Heat olive oil in a medium saucepan over medium/high heat. Add mushrooms, onion, salt, and 3 sage leaves. Saute for around 8-10 minutes to cook down the mushrooms. 4) Discard the sage and remove the mushroom topping and set aside. 5) In the same pan, add a little more olive oil (if needed) and fry 4 large eggs to the desired yolk consistency. 6) Finally, serve savory oatmeal topped with the sauteed mushrooms, fried egg, pepitas, and goat cheese.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/LsUAbiI',
          type: 'Vegetarian',
          title: 'Haloumi Burrity Bowl with Roasted Potatoes',
          description:
            'Ingredients: Potatoes: 1/4 pound yukon gold potatoes, 2 teaspoons olive oil, 1/2 teaspoon smoked paprika, 1/4 teaspoon ground cumin, 1/4 teaspoon salt. Guacamole: 1 ripe avocado, 3 tablespoons minced cilantro, plus extra for topping, 1 tablespoon lime juice, 1/4 teaspoon salt. Bowls: 1 tablespoon olive oil, 2 ounces halloumi cheese, 1 1/2 cups cooked brown rice, 3 tablespoons toasted pepitas, Hot Sauce, for topping. Directions: 1) Heat oven to 425˚F. Cut the potato into ¼” cubes or slightly larger wedges. Toss with the olive oil, cumin, smoked paprika, and salt. Roast until the potatoes are lightly browning, 20 to 25 minutes. 2) While the potatoes are roasting, Remove pit from avocado and scoop out the avocado. Place in a bowl and mash with cilantro, lime juice, and salt. 3) Heat a medium pan over medium-low heat. Add the olive oil followed by the halloumi. Fry halloumi until golden on each side. 4) Divide the rice into two bowls and top with roasted potatoes, guacamole, pepitas, fried halloumi, and a drizzle of hot sauce if desired. Top with cilantro and pepitas before serving.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/idTLKPi',
          type: 'Vegetarian',
          title: 'Walnut Chorizo Tacos',
          description:
            'Ingredients: Walnut Chorizo: 3 cups cauliflower florets, 2 cups Southern Grove Walnuts, whole, 2 individual Pueblo Lindo Chipotles in adobo sauce, 1 tablespoon Stonemill Chili Powder, 1 teaspoon Stonemill Ground Cumin, 1 teaspoon salt. Pineapple Salsa: 1 pineapple, cored and diced, 2 jalapeños, ribs and seeds removed, minced, 1 bunch of cilantro, chopped, 1/2 red onion, diced, 1 teaspoon salt, juice of 2 limes. Directions: 1) Walnut Chorizo: Preheat oven to 375 degrees. Pulse everything in a food processor until evenly ground, similar to the texture of ground meat. Transfer to a greased or parchment-lined baking sheet. Bake for 30 minutes, stirring halfway to prevent browning. 2) Pineapple Salsa: Mix! 3)Tacos: Layer avocado mash, walnut chorizo, pineapple salsa, and slaw into a soft, warm, charred tortilla. Oh my gosh. Be amazed.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/Ba9fOoQ',
          type: 'Meat',
          title: 'Cayenne Chicken Skewers',
          description:
            'Ingredients: 1 tsp cayenne pepper, 2 tsp smoked paprika (pimenton), 1 tsp ground cumin, 2 garlic cloves, crushed, 2 tbs olive oil, 1kg chicken thighs, cut into 3cm pieces, 2 limes, halved, 1 cup (280g) thick Greek-style yoghurt, 2 tbs Sriracha. Directions: 1) Combine cayenne, paprika, cumin, garlic and oil in a bowl. Add chicken and turn to coat. Thread chicken onto 8 skewers and chill for at least 1 hour to marinate. 2) Heat a barbecue or chargrill pan over high heat. Cook the skewers, turning, for 4 minutes, then add limes cut-side down. Cook for a further 4 minutes or until limes are charred and chicken is charred and cooked through. Set aside to rest, loosely covered with foil, for 5 minutes.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/Tk4l23R',
          type: 'Meat',
          title: 'Bavette Steak',
          description:
            'Ingredients: 1/3 cup (80ml) extra virgin olive oil, 2 garlic cloves, sliced, 4 thyme sprigs, 1.4kg bavette, cut into 2 pieces, 50g unsalted butter, halved. Directions: 1) Preheat oven to 180°C. Place two ovenproof frypans over medium-high heat. Divide oil, garlic and thyme between frypans. Season steak and add to pan. Cook for 2 minutes each side or until browned. Add the butter and transfer pans to oven. Cook for a further 3-4 minutes for medium-rare or until cooked to your liking. Remove from oven, then baste with melted butter. Rest, loosely covered with foil, for 5 minutes. 2) To serve, slice steak against the grain',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          img: 'https://imgur.com/Tk4l23R',
          type: 'Meat',
          title: 'Bavette Steak',
          description:
            'Ingredients: 1/3 cup (80ml) extra virgin olive oil, 2 garlic cloves, sliced, 4 thyme sprigs, 1.4kg bavette, cut into 2 pieces, 50g unsalted butter, halved. Directions: 1) Preheat oven to 180°C. Place two ovenproof frypans over medium-high heat. Divide oil, garlic and thyme between frypans. Season steak and add to pan. Cook for 2 minutes each side or until browned. Add the butter and transfer pans to oven. Cook for a further 3-4 minutes for medium-rare or until cooked to your liking. Remove from oven, then baste with melted butter. Rest, loosely covered with foil, for 5 minutes. 2) To serve, slice steak against the grain',
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
