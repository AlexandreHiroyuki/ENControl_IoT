<template>
  <div id="ctrl-table">
    <History/>

    <p class="tc" @click="$store.commit('increment')">Click on Vuex to count: {{counter}}</p>

    <h2>Component List:</h2>

    <div class="flex flex-wrap justify-center">
      <Controller
        @click="toggle()"
        v-for="(obj, index) in $store.state.controller"
        :key="index"
        :index="index"
      />
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
    counter: function() {
      return this.$store.state.count;
    }
  }
};
</script>
 
<style lang="scss">
</style>
 