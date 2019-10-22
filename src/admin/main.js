import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import App from './App.vue';
import router from './router';
import store from './store';
import requests from './requests';
import './focus';

Vue.use(SimpleVueValidation);
store.$axios = requests;

new Vue({
  el: '#app-root',
  router,
  store,
  render: (h) => h(App),
});
