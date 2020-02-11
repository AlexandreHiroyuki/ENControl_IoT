import Vue from "vue";
import Tachyons from "tachyons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  Tachyons,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
