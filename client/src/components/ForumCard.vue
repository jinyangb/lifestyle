<template>
  <section class="post">
    <div class="content">
    <div>
      <h4>{{ name }}</h4>
      <p>{{ content }}</p>
      <form v-if="displayForm">
        <input placeholder="Name" @input="handleNameUpdate"/>
        <input placeholder="Content" @input="handleContentUpdate"/>
        <button @click="updateContent">Save</button>
      </form>
      <button @click="showForm">Update</button>
      <button class="delete-button" @click="deletePost(id)">X</button>
    </div>
    <div class="delete-button-container">
    </div>
    <div>
    </div>
    </div>
    
  </section>
</template>

<script>
import {UpdatePost} from '../services/post'
export default {
  
  name: 'ForumCard',
  props: {
    name: String,
    content: String,
    id: Number
},
data: () => ({
  displayForm: false,
  nameChange: '',
  contentChange:''
  }),
mounted: function(){

},
  methods: {
    deletePost(id) {
      this.$router.go()
      this.$emit('deletePost', id)
    },
    showForm() {
      this.displayForm = true
    },
    handleNameUpdate(event){
      this.nameChange = event.target.value
    },
    handleContentUpdate(event){
      this.contentChange = event.target.value
    },
    async updateContent() {
      this.$router.go()
      const data = {
        "name": this.nameChange,
        "content": this.contentChange
      }
      const res = await UpdatePost(this.id, data)
      console.log(res)
    }
} 
}
</script>

