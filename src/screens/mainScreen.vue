<template>
  <div class="main-container">
   <div class="upload-section">
      <Uploader/>
   </div>
   <div class="stories">
    <Story :key='i' v-for='(post,i) in posts' :post='post'/>

   </div>     
  </div>    
</template>

<script>
import Story from '../components/story.vue';
import axios from 'axios';
const url='http://localhost:3000';

import Uploader from '../components/uploader.vue';
export default {
    name:'mainscreen',
    components:{
        Story,
        Uploader
    },
    data(){
      return {
        authdata:null,
        posts:[]
      }
    },
    created(){
       this.authdata=JSON.parse(localStorage.getItem('auth'));
       axios.get(`${url}/posts/${this.authdata.name}`).then(res=>{
       console.log(res);
       this.posts=Object.values(res.data.posts);
       })
    }
}
</script>
<style>
.main-container{
  text-align: center;
  background: rgb(7, 2, 36);
}
.upload-section{
  display: flex;
  justify-content: center;
  align-items: center;
}
.stories{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
    overflow-y: scroll;
    grid-gap: 20px;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.stories::-webkit-scrollbar{
    display: none;
}
</style>
