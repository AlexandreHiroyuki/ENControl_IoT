import App from "./App.js"
import router from "./router.js"

new Vue({
  router,
  render: h => h(App)
}).$mount(`#app`)
