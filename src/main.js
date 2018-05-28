import Vue from 'vue'
import App from './App.vue'
import hello from './hello.vue'
import * as d3 from "d3";
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
export const router = new VueRouter({
  routes:[
  {
    path:'/hello',
    component:hello
  }]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components:{App}
})
