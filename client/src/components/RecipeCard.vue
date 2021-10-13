<template>
  <section class="post">
    <div class="content">
    <div>
      <h4>{{ recipe.img }}</h4>
      <h4>{{ recipe.type }}</h4>
      <h4>{{ recipe.title }}</h4>
      <p>{{ recipe.description }}</p>
    </div>
    </div>
  </section>
</template>

<script>

export default {
  
  name: 'RecipeCard',
  props: [
    "recipe"
  ],
mounted: function(){
  this.getRecipe()
},
  methods: {
} 
}
</script>

<style>