<template>
  <section class="post">
    <div class="content">
    <div>
      <h4>{{ workout.img }}</h4>
      <h4>{{ workout.type }}</h4>
      <h4>{{ workout.title }}</h4>
      <p>{{ workout.description }}</p>
    </div>
    </div>
  </section>
</template>

<script>

export default {
  
  name: 'WorkoutCard',
  props: [
    "workout"
  ],
mounted: function(){
  // this.getWorkout()
  },
  methods: {
} 
}
</script>

<style scoped>
  .post {
    align-content: center;
    display: flex;
    flex-direction: column-reverse;
    border: 4px solid black;
    border-radius: 20px;
    justify-content:space-evenly;
    padding: 20px;
    margin: 25px;
    width:500px;
    overflow-x: auto;
    overflow-y: auto;
    color: black;
  }

  .content {
    display: flex;
    justify-content:center;
    width: 500px;
  }



</style>
