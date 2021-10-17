<template>
  <div class="bg">
    <div v-for="recipe in recipes" :key="recipe.id" >
    <RecipeCard :recipe="recipe" />

    </div>
  </div>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue'
import axios from 'axios'
import {BASE_URL} from '../globals'
export default {
  name: 'Recipe',
    components:{
    RecipeCard
  },
    data: ()=> ({
      recipes: []
    }),
      mounted: function(){
    this.getRecipe()
  },
  methods: {
        async getRecipe(){
      try {
        const res = await axios.get(
          `${BASE_URL}/diets`
        )
        this.recipes = res.data
      } catch (error) {
        console.log(error)
      }
}
}
}
</script>