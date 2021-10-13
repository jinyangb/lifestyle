<template>
  <div>
    <p3>Forum</p3>
    <div v-for="forum in forums" :key="forum.id" >
    <ForumCard :forum="forum" />
    </div>
  </div>
</template>

<script>
import ForumCard from '../components/ForumCard.vue'
import axios from 'axios'
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
    posts:[]
    }),
mounted: function(){
    this.getPosts()
  },
  methods: {
    async submitPost() {
      const data = {
        "name": this.input.name,
        "content": this.input.comment,
      }
      try {
        const res = await axios.post(
          `${BASE_URL}/api/discussions`, data
        )
        this.posts.push(res.data)
      } catch (error) {
        console.log(error)
      }
    },
    handleChange(event) {
      this.input[event.target.name] = event.target.value
    },
    async getPosts(){
      try {
        const res = await axios.get(
          `${BASE_URL}/api/discussions`
        )
        this.posts = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async deletePost(discussionId){
      try {
      const res = await axios.delete(
          `${BASE_URL}/api/discussions/${discussionId}`
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