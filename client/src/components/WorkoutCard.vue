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
    /* cursor: pointer; */
    /* background-color: #c2e59c; 
    background: -webkit-linear-gradient(to right, #c2e59c, #64b3f4); 
    background: linear-gradient(to right, #c2e59c, #64b3f4);  */
    /* border-top-left-radius : 30px;
    border-bottom-right-radius : 30px; */
    /* transition: all 0.2s;     */
    overflow-x: auto;
    overflow-y: auto;
    /* font-weight:bolder; */
    color: black;
    /* background-image: url("https://i.imgur.com/PtlNNn0t.jpg"); */
  }

  .content {
    display: flex;
    justify-content:center;
    width: 500px;
  }



</style>
