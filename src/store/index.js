import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: "",
      name: "",
      username: "",
      token: "",
    },
    alerts: {
      success: [],
      error: [],
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setAlerts(state, alerts) {
      state.alerts = alerts;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    setAlerts({ commit }, alerts) {
      commit("setAlerts", alerts);
    }
  },
  modules: {},
});
