import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Recipe from './pages/Recipe.vue'
import Workout from './pages/Workout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/workouts', name: 'Workouts', component: Workout },
  { path: '/recipes', name: 'Recipes', component: Recipe },
  { path: '/about', name: 'About', component: About }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
