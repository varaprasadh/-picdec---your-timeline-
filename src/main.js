import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import LoginScreen from './screens/loginScreen.vue';
import MainScreen from './screens/mainScreen.vue';

Vue.config.productionTip = false;
Vue.use(Router);

const routes = [
  {
    path: '/', component: LoginScreen
  }, {
    path: '/user', component: MainScreen
  }
]
const router=new Router({
  mode:"history",
  routes:routes
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
