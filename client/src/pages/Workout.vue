<template>
  <div class="bg">
    <div v-for="workout in workouts" :key="workout.id" >
    <WorkoutCard :workout="workout" />
    </div>
  </div>
</template>

<script>
import WorkoutCard from '../components/WorkoutCard.vue'
import axios from 'axios'
import {BASE_URL} from '../services/api'
export default {
  name: 'Workout',
    components:{
    WorkoutCard
  },
    data: ()=> ({
      workouts: []
    }),
      mounted: function(){
    this.getWorkout()
  },
  methods: {
        async getWorkout(){
      try {
        const res = await axios.get(
          `${BASE_URL}/workouts`
        )
        this.workouts = res.data
      } catch (error) {
        console.log(error)
      }
}
}
}
</script>
<style>

.bg{
    background-color: rgb(0, 0, 0);
}

</style>
