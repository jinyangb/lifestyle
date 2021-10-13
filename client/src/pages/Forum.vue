<template>
  <div>
      <form @submit.prevent="submitPost">
        <input maxlength="80" name="name" type="text" placeholder="Name" :value="input.name" @change="handleChange"/>
        <textarea maxlength="255" rows="4" cols="50" class="comment" name="content" type="content" placeholder="Content" :value="input.content" @change="handleChange"/>
        <button :disabled="!input.name" >Submit</button>
      </form>
    <p3>Forum</p3>
    <div v-for="post in forums" :key="post.id" >
    <ForumCard :post="post" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ForumCard from '../components/ForumCard.vue'
import {BASE_URL} from '../globals'
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
    forums:[]
    }),
mounted: function(){
    this.getPosts()
  },
  methods: {
    async submitPost() {
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
    async deletePosts(discussion_id){
      try {
      const res = await axios.delete(
          `${BASE_URL}/discussions/${discussion_id}`
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