import { setToken, removeToken, setAuthHttpHeaderToAxios } from '@/admin/helpers/token';

export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET_USER: (state) => {
      state.user = {};
    },
  },
  getters: {
    userIsLogged: (state) => {
      const userObj = state.user;
      const userObjectIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;

      return userObjectIsEmpty === false;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const { data } = await this.$axios.get('/user');
        commit('SET_USER', data.user);
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async login({ dispatch }, params) {
      try {
        const response = await this.$axios.post('/login', params);
        const token = response.data.token;
        setAuthHttpHeaderToAxios(this.$axios, token);
        setToken(token);
        await dispatch('fetchUser');
        return response;
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async logout({ commit }, params) {
      try {
        const response = await this.$axios.post('/logout');
        removeToken();
        commit('RESET_USER');
        return response;
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
  },
};
