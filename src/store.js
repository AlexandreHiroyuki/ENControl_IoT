import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bt_state: false,
    count: 1,
    controller: [
      {
        id: "Lamp 1",
        status: true
      },
      {
        id: "Machine 1",
        status: true
      },
      {
        id: "Machine 2",
        status: false
      },
      {
        id: "Lamp 2",
        status: true
      },
      {
        id: "Lamp 3",
        status: false
      },
      {
        id: "Strawberry",
        status: true
      }
    ]
  },
  mutations: {
    controllerSwitch(state, index) {
      state.controller[index].status = !state.controller[index].status;
    },
    btShow(state) {
      state.bt_state = true;
    },
    btHide(state) {
      state.bt_state = false;
    },
    increment(state) {
      state.count *= 2;
    }
  },
  actions: {}
});
