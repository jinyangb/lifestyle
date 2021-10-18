<template>
  <div class="photo">
      <form @submit.prevent="submitPost">
        <input maxlength="80" name="name" type="text" placeholder="Name" :value="input.name" @change="handleChange"/>
        <textarea maxlength="255" rows="4" cols="50" class="comment" name="content" type="content" placeholder="Content" :value="input.content" @change="handleChange"/>
        <button :disabled="!input.name" >Submit</button>
      </form>
    <div v-if="this.posts"  >
    <ForumCard :name="post.name" :content="post.content" :id="post.id" v-for="post in posts" :key="post.id" @deletePost="deletePost"/>
    </div>
        <div v-else class="post-container">
      <h3>No content to display :(</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ForumCard from '../components/ForumCard.vue'
import {BASE_URL} from '../services/api'

export default {
  name: 'Forum',
    components:{
    ForumCard
  },
    data: ()=> ({
    input: {
      name: '',
      content: ''
    },
    posts:[]
    }),
mounted: function(){
    this.getPosts()
  },
  methods: {
    async submitPost() {
      this.$router.go()
      const data = {
        "name": this.input.name,
        "content": this.input.content,
      }
      try {
        const res = await axios.post(
          `${BASE_URL}/discussions`, data
        )
        this.posts.push(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    handleChange(event) {
      this.input[event.target.name] = event.target.value
      this.input[event.target.content] = event.target.value
    },
    async getPosts(){
      try {
        const res = await axios.get(
          `${BASE_URL}/discussions`
        )
        this.posts = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async deletePost(post_id){
      try {
      const res = await axios.delete(
          `${BASE_URL}/discussions/${post_id}`
        )
      const index = this.posts.indexOf(res.data["payload"])
      this.posts.splice(index,1)
      } catch (error) {
        console.log(error)
      }
    },
  }, 
}
</script>

<style scoped>

h3 {
  font-size: 1.5em;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
input,
button,
textarea {
  padding: 0.5em 1.2em;
  border-radius: 6px;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  margin: 10px;
}
input,
textarea {
  border: 2px solid #fffdfd;
  outline: none;
  width: 500px;
}
button {
  margin-left: 1em;
  cursor: pointer;
  margin: 20px;
}
button:not(:disabled) {
    cursor: pointer;
  background-color: #fdfdfd;
}
.post-container {
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
}

</style>
