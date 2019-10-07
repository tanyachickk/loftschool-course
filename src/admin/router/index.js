import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/admin/router/routes';
import store from '@/admin/store';
import axios from '@/admin/requests';

import { setAuthHttpHeaderToAxios, getToken, removeToken } from '../helpers/token';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some((record) => record.meta.public);
  const isUserLogged = store.getters['user/userIsLogged'];

  if (isPublicRoute === false && isUserLogged === false) {
    setAuthHttpHeaderToAxios(axios, getToken());
    try {
      await store.dispatch('user/fetchUser');
      next();
    } catch (error) {
      router.replace('/login');
      removeToken();
    }
  } else {
    next();
  }
});
export default router;
