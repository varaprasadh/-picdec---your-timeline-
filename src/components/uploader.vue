<template>
  <div class="wrapper">
   <div class="input">
       <input type="file" v-on:change="showPreview" ref="filebtn" name="pic" >
       <div class="previewimg" v-on:click="$refs.filebtn.click()">
           <img src="../assets/logo.png" ref="preImg" alt="preview">
       </div>
       <input type="text" v-model="desc" placeholder="write some note" class="desc" name="desc">
   </div> 
   <div @click='upload' class="upload">upload</div>
   </div>    
</template>
<script>
var auth=JSON.parse(localStorage.getItem('auth'));
var name=auth.name;
export default {
    name:"uploader",
    data(){
        return{
           desc:null,
           file:null
        }
    },
    methods:{
      upload(){
           if(this.desc && this.file || this.desc){
               var formDAta=new FormData();
               formDAta.append('file',this.file);
               formDAta.append('name',name);
               formDAta.append('desc',this.desc)
               fetch('http://localhost:3000/upload',{
                   method:'post',
                   body:formDAta,
                   mode:'cors'
               }).then(res=>{
                   console.log(res);
               })
           }
        },
        showPreview(){
            var file=this.$refs.filebtn.files[0];
            this.file=file;
            var preimg= this.$refs.preImg;
            console.log(file);
            var fr=new FileReader();
            fr.onload=function() {
                var src=fr.result;
                preimg.src=src;
            }
            fr.readAsDataURL(file);
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
    cursor: pointer;
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
