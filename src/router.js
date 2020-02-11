import ControlTable from "./views/ControlTable.js"
import Test from "./views/Test.js"

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "crtl-table",
      component: ControlTable
    },
    {
      path: "/test",
      name: "test",
      component: Test
    }
  ]
})
