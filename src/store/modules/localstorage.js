import { uuid } from 'vue-uuid';

export default {
  state: {
    user: {
      id: "",
      name: "",
      username: "",
      lastname: "",
      email: "",
      password: "",
      cpf: "",
      phone: "",
      token: "",
    },
    login: {
      userid: "",
      username: "",
      token: null,
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLogin(state, login) {
      state.login = login;
    },
    setUserId(state, userid) {
      state.user.id = userid;
    },
    setUserToken(state, token) {
      state.user.token = token;
    },
  },
  actions: {
    register({commit}, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!payload.resolver) {
            reject(new Error("Error"));
          }
          let user_id = Math.floor(Math.random() * 10);
          commit("setUser", payload.user);
          commit("setUserId", user_id);
          resolve(payload.user);
        }, 2000);
        });
    },
    login({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!payload.resolver) {
            reject(new Error("Error"));
          }
          if(state.user.username == payload.form.username && state.user.password == payload.form.password) {
            let userpayload = {
              userid: state.user.id,
              username: state.user.username,
              token: uuid.v1()
            }
            commit("setLogin", userpayload);
            commit("setUserToken", userpayload.token);
            resolve({id:state.user.id, token: userpayload.token});
          } else {
            reject(new Error());
          }
        }, 1000);
      });
     },
    logout({ commit }) {
      commit("setLogin", {
        userid:"",
        username:"",
        token: null,
      });
    },
    edit({ commit }, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!payload.resolver) {
            reject(new Error("Error"));
          }
          commit("setUser", payload.user);
          resolve(payload.user);
        }, 1000);
      });
    }
  },
  getters: {
    isAuthenticated: state => !!state.login.token,
    getUser: state => {
      return state.user;
    },
    getUserId: state => {
      return state.login.userid;
    }
  }
}
