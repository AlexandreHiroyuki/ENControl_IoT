import Controller from "./components/Controller.js"

export default {
  name: "App",
  components: {
    Controller
  },
  computed: {
    controllerMapped() {
      // const objects = this.$store.state.controllers;
      // let filtered_objects = objects;
      return this.$store.getters.filteredControllers
    }
  },
  template: `
    <div id="app" class="bg-washed-yellow">
        <header class="z-9999 bg-color-ino shadow-1 flex flex-wrap">
            <h1 class="sans-serif dib f2 b w-90 pl3 near-white">
            Arduino Electrical Network Controller
            </h1>
        </header>
        <div class="sticky z-999 shadow-1 pa2 bg-yellow flex flex-wrap justify-around">
          <input
          class="w-40 bw-0 bg-transparent bt-0 br-0 bl-0 b--color-ino"
          placeholder="Pesquise o módulo aqui"
          v-model.trim="$store.state.searchInput"
          />
          <input
          class="w-40 bw-0 bg-transparent bt-0 br-0 bl-0 b--color-ino"
          placeholder="Pesquise a tag aqui"
          v-model.trim="$store.state.searchInput"
          />
        </div>
        <ul class="pt3 pb3 flex flex-wrap justify-center">
          <controller v-for="(obj, index) in controllerMapped" :key="index" :index="index" />
        </ul>
    </div>
  `
}
