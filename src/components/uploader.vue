<template>
  <div class="wrapper">
   <div class="input">
       <input type="file" name="pic" >
       <div class="previewimg">
           <img src="../assets/logo.png" alt="preview">
       </div>
       <input type="text" placeholder="write some note" class="desc" name="desc">
   </div> 
   <div @click='upload' class="upload">upload</div>
   </div>    
</template>
<script>
export default {
    name:"uploader",
    data(){
        return{

        }
    },
    methods:{
      upload(){

        }
    }
}
</script>
<style>
.wrapper{
 background: green;
 display: flex;
 flex-direction: column;
 align-items: center;
 width:400px;
 margin-bottom: 30px;
}
.previewimg,.previewimg img{
    width:100px;
    height: 100px;
}
  input[type='file']{
      display: none;
  }
  .input{
      display: flex;
      align-self: stretch;
  }
 .desc{
     flex: 1;
 }
  .upload{
      padding: 10px 30px;
      color: red;
      background: white;
      border: 2px solid cyan;
      align-self: stretch;
      cursor: pointer;
  }
</style>
