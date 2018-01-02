import axios from 'axios';

export default {
  FETCH_USERS: ({commit, dispatch, state}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_USERS', {users: [{name: '小a'}, {name: '小b'}]});
        resolve([{name: '小a'}, {name: '小b'}]);
      }, 100);
    });
  },
  FETCH_USER: ({commit, dispatch, state}, {type}) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('SET_USER', {user: {name: '小a'}});
        resolve({name: '小a'});
      }, 100);
    });
  }
}
