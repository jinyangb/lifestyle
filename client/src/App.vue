<template>
  <div id="app">
        <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/workouts">Workouts</router-link> |
      <router-link to="/recipes">Recipes</router-link> |
      <router-link to="/forum">Forum</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav a {
  font-weight: bold;
  color:gray;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: rgb(32, 138, 173);
}
</style>
