import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bt_add_state: false
  },
  mutations: {
    btAddStateSwitch(state) {
      state.bt_add_state = !state.bt_add_state;
    }
  },
  actions: {}
});
