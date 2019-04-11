<template>
  <div id="app">
     <div class=header>
       <div class="label">#PicDec</div>
     </div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginScreen from './screens/loginScreen.vue';
import MainScreen from './screens/mainScreen.vue';



export default {
  name: 'app',
  components:{
    LoginScreen,
    MainScreen
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
body::-webkit-scrollbar{
  /* overflow: hidden; */
  width:5px;
}
.header{
  padding: 20px;
  text-align: center;
  font-weight: bold;
  filter: drop-shadow(5px 5px 10px black);
  background: white;
}
</style>
