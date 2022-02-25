import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import VueResource from 'vue-resource'
import store from './store/store'
=======
>>>>>>> 6903d67e26cc4186ec540ebf62642e7bb68e45b7

import App from './App.vue'

import { routes } from './routes'

Vue.use(VueRouter);
<<<<<<< HEAD
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs--stock-trader-default-rtdb.firebaseio.com/"

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})
=======
>>>>>>> 6903d67e26cc4186ec540ebf62642e7bb68e45b7

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  store,
=======
>>>>>>> 6903d67e26cc4186ec540ebf62642e7bb68e45b7
  render: h => h(App)
})
