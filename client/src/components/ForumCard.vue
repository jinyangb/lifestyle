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

<style scoped>
  .post {
    border: 4px solid black;
    border-radius: 20px;
    padding: 20px;
    margin: 25px;
    width: auto;
    overflow-x: auto;
    overflow-y: auto;
    color: black;
  }
  .content {
    display: flex;
    text-align: center;
    color: cornsilk;
    justify-content:center;
  }
  button {
  cursor: pointer;
  margin-left: 1em;
  background-color: #6095c0;
  margin: 10px;
}

</style>
