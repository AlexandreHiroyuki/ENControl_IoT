import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    btt_state: false,
    count: 1
  },
  mutations: {
    btShow(state) {
      state.btt_state = true;
    },
    btHide(state) {
      state.btt_state = false;
    },
    increment(state) {
      state.count *= 2;
    }
  },
  actions: {}
});
