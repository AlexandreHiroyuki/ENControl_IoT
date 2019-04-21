<template>
  <div id="ctrl-table">
    <History/>

    <p class="tc" @click="$store.commit('increment')">Vuex test counter: {{counter}}</p>

    <h2>Component List:</h2>

    <div class="flex flex-wrap justify-center">
      <Controller @click="toggle()" v-for="obj in control" :key="obj.id" :obj_name="obj.id"/>
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
  data: function() {
    return {
      control: [
        {
          id: "Lamp 1"
        },
        {
          id: "Machine 1"
        },
        {
          id: "Machine 2"
        },
        {
          id: "Lamp 2"
        },
        {
          id: "Lamp 3"
        },
        {
          id: "Strawberry"
        }
      ]
    };
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
 