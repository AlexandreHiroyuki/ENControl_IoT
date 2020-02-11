export default new Vue({
  name: "ControlTable",
  template: `<div id="ctrl-table">

    <div class="pa2 mb2 bg-dark-yellow">
      Search for:
      <input
        class="w-30 bw-0 bg-transparent bt-0 br-0 bl-0 b--yellow"
        placeholder="Digite aqui"
      />
      <button></button>
    </div>

    <h2 class="ml2">Component List:</h2>

    <div class="flex flex-wrap justify-center">
      <Controller v-for="(obj, index) in controllerMapped" :key="index" :index="index" />
    </div>
  </div>`
})
