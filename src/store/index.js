import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
function filterUsers(users, filter) {
  let _arr = [];
  users.map(user => {
    if (user.username.toLowerCase().includes(filter.toLowerCase())) {
      _arr.push(user);
    }
  });
  return _arr;
}
export default new Vuex.Store({
  state: {
    filter: '',
    users: {},
  },
  getters: {
    filterUsers(state) {
      if (state.users.length) {
        return filterUsers(state.users, state.filter);
      }
    },
  },
  mutations: {
    CHANGE_FILTER(state, payload) {
      state.filter = payload;
    },
    SET_USERS(state, payload) {
      state.users = payload;
      console.log(payload);
    },
  },
  actions: {
    getInfoFromApi(context, payload) {
      console.log(payload);
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        context.commit('SET_USERS', response.data);
      });
    },
  },
});
