<template>
      <div class="story">
          <div class="photo">
              <img :src="src" alt="image">
          </div>
          <div class="description">
             {{post.desc}}
          </div>
      </div>
</template>
<script>

export default {
 name:'story',
 created(){
  var pic=this.post.img.data.data;
  var contentType=this.post.img.contentType;
  console.log(contentType)
  var imgblob= new Blob(new Uint8Array(pic),{type:contentType});
  console.log(imgblob);
//   this.src=window.URL.createObjectURL(imgblob);
  var fr=new FileReader()
  fr.onload=function(){
      console.log(fr.data);   
  }
  fr.readAsDataURL(imgblob);
  console.log(pic);
 },
 data(){
     return {
       src:null
     }
 },
 props:['post']
}
</script>
<style>
   .story{
       background:white;
       border-radius: 10px;
       padding: 10px;
       text-align: center;
   }
</style>

