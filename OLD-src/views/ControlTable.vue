<template>
  <div id="ctrl-table">
    <History />

    <div class="pa2 mb2 bg-dark-yellow">
      Search for:
      <input
        class="w-30 bw-0 bg-transparent bt-0 br-0 bl-0 b--yellow"
        placeholder="Digite aqui"
        v-model.trim="$store.state.searchInput"
      />
      <button></button>
    </div>

    <h2 class="ml2">Component List:</h2>

    <div class="flex flex-wrap justify-center">
      <Controller v-for="(obj, index) in controllerMapped" :key="index" :index="index" />
    </div>
  </div>
</template>

<script>
import Controller from "@/components/Controller.vue";
import History from "@/components/History.vue";

export default {
  name: "ControlTable",
  components: {
    Controller,
    History
  },
  computed: {
    controllerMapped() {
      // const objects = this.$store.state.controllers;
      // let filtered_objects = objects;
      return this.$store.getters.filteredControllers;
    }
  }
};
</script>

<style lang="scss">
</style>
 