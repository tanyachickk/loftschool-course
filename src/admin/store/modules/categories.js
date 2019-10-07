export default {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    CREATE_CATEGORY: (state, category) => {
      state.categories = [...state.categories, category];
    },
    UPDATE_CATEGORY: (state, category) => {
      state.categories = [...state.categories.filter((item) => item.id !== category.id), category];
    },
    DELETE_CATEGORY: (state, id) => {
      state.categories = state.categories.filter((item) => item.id !== id);
    },
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post('/categories', {
          title: groupTitle,
        });
        commit('CREATE_CATEGORY', response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async updateSkillGroup({ commit }, { id, title }) {
      try {
        const response = await this.$axios.post(`/categories/${id}`, { title });
        commit('UPDATE_CATEGORY', response.data.category);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async removeSkillGroup({ commit }, id) {
      try {
        const response = await this.$axios.delete(`/categories/${id}`);
        commit('DELETE_CATEGORY', id);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
    async fetchCategories({ rootState, commit }) {
      try {
        const userId = rootState.user.user.id;
        const response = await this.$axios.get(`/categories/${userId}`);
        commit('SET_CATEGORIES', response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message);
      }
    },
  },
};
