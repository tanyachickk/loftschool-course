import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
import Notifications from 'vue-notification';
import velocity from 'velocity-animate';
import App from './App.vue';
import router from './router';
import store from './store';
import requests from './requests';
import './focus';

Vue.use(SimpleVueValidation);
Vue.use(Notifications, { velocity });
store.$axios = requests;

new Vue({
  el: '#app-root',
  router,
  store,
  render: (h) => h(App),
});
