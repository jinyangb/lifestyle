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
      <button class="delete-button" @click="deletePost(post.id)">X</button>
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
    deletePost(postId) {
      this.$emit('deletePost', postId)
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
  /* .post {
    display: flex;
    flex-direction: column;
    border: 3px solid black;
    border-radius: 15px;
    justify-content:space-evenly;
    padding: 20px;
    margin: 25px;
    width:500px;
    cursor: pointer;
    background-color: #c2e59c; 
    background: -webkit-linear-gradient(to right, #c2e59c, #64b3f4); 
    background: linear-gradient(to right, #c2e59c, #64b3f4); 
    border-top-left-radius : 30px;
    border-bottom-right-radius : 30px;
    transition: all 0.2s;    
    overflow-x: auto;
    overflow-y: auto;
    font-weight: bold;
    color: black;

  } */
  /* .post:hover{
    opacity: 0.8;
  } */
  .content {
    display: flex;
    justify-content:space-evenly;
    width:500px;
  }
  .date {
    display: flex; 
    justify-content:space-evenly;
    align-items: flex-start;
    height: 20px;
    padding: 5px;
  }
  .delete-button-container {
    position: relative;
    width: 10px;
    height: 10px;
  }
  .delete-button:hover {
    background-color: rgb(0, 95, 107);
    border-radius: 2px;
    border: none;
    color: #64b3f4;
    opacity: 0.8;

  }

</style>
