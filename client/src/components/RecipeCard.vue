<template>
  <section class="post">
    <div class="content">
    <div>
      <h3>{{ recipe.type }}</h3>
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
  ]
}
</script>

<style scoped>
  .post {
    /* align-content: center; */
    /* display: flex; */
    /* flex-direction: column-reverse; */
    border: 4px solid black;
    border-radius: 20px;
    /* justify-content:space-evenly; */
    padding: 20px;
    margin: 25px;
    width: auto;

    overflow-x: auto;
    overflow-y: auto;
    color: black;
    /* background-image: url("https://i.imgur.com/Hg2pVI8.jpg"); */
  }
  .content {
    display: flex;
    text-align: center;
    color: cornsilk;
    justify-content:center;
    /* width: 500px; */
  }
</style>
