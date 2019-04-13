<template>
      <div class="story">
          <div class="photo">
              <img ref="photo" :src="src" alt="image">
          </div>
          <div class="description">
             {{post.desc}}
          </div>
      </div>
</template>
<script>

function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

export default {
 name:'story', 

 created(){
  var pic=this.post.img.data.data;
  var base64str=arrayBufferToBase64(pic);
  var srcstr='data:image/png;base64,'+base64str;
  this.src=srcstr;

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
       margin: 10px;
   }
   img{
       height:200px;
   }
</style>

