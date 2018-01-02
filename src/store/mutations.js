import Vue from 'vue'

export default {
  SET_USER: (state, {user}) => {
    state.user = user;
  },

  SET_USERS: (state, {users}) => {
    state.users = users;
  }
}
