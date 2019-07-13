import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bt_group_hover_state: false,
    count: 1,
    controllers: [
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
    ],
    searchInput: ""
  },
  getters: {
    filteredControllers: state => {
      const objects = state.controllers;
      let filtered_objects = objects;
      return filtered_objects;
      // return state.controllers.filter(obj =>
      //   obj.id.includes(state.searchInput)
      // );
    }
  },
  mutations: {
    controllerSwitch(state, index) {
      state.controllers[index].status = !state.controllers[index].status;
    },
    btShow(state) {
      state.bt_group_hover_state = true;
    },
    btHide(state) {
      state.bt_group_hover_state = false;
    },
    increment(state) {
      state.count *= 2;
    }
  },
  actions: {}
});
