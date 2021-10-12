<template>
  <div class="feed">
    <div class="scroll-feed" >
      <FeedCard v-for="photo in photos" :key="photo.id" :photo="photo">
      </div>
    <div class="item-view" v-if="selectedPhoto">
      <DetailView :photo="selectedPhoto"/>
    </div>
    <div class="item-view" v-else>
      <div>
        <img src="../assets/empty.svg" />
      </div>
      <h3>No Photo Selected</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../globals'
import FeedCard from './FeedCard.vue'
import DetailView from './DetailView.vue'
const API_KEY = process.env.VUE_APP_UNSPLASH_KEY
export default {
  name: 'Feed',
  components: {
  FeedCard,
  DetailView
  },
data: () => ({
  photos: [],
  selectedPhoto: null
}),
mounted: function(){
  this.getPhotos()
},
methods:{
  async getPhotos(){
    const res = await axios.get(
      `${BASE_URL}/photos?client_id=${API_KEY}`
    )
  // console.log(res.data)
  this.photos = res.data
},
  async selectPhoto(photoId){
    const res = await axios.get(
      `${BASE_URL}/photos/${photoId}?client_id=${API_KEY}`
    )
    this.selectedPhoto = res.data
  }
  }
}
</script>

<style>
.feed {
  display: flex;
}

.scroll-feed {
  flex: 1;
  overflow-y: scroll;
  height: 100vh;
}

.item-view {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 1150px;
}
</style>
