import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store/store'

import App from './App.vue'

import { routes } from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs--stock-trader-default-rtdb.firebaseio.com/"

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
