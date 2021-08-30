import Vue from "vue";
import Vuex from "vuex";
import localstorage from './modules/localstorage'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    localstorage,
  },
});
