<template>
  <div id="ctrl-table">
    <Info :msg="msg"/>
    <div id="search-filters">
      <StdButton class="search-button" content="All On"/>
    </div>
    <h2>Component List:</h2>

    <div id="obj-list">
      <Controller v-for="obj in control" :key="obj.id"/>
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import StdButton from "@/components/StdButton.vue";
import Controller from "@/components/Controller.vue";

export default {
  name: "ControlTable",
  components: {
    Info,
    StdButton,
    Controller
  },
  data: function() {
    return {
      msg: "Text text text...",
      control: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    };
  },
  methods: {
    toggle: function() {
      console.log("a");
    }
  }
};
</script>
 
 <style lang="scss">
#ctrl-table {
  h2 {
    text-align: left;

    padding-left: 5%;
    width: 50%;
  }

  #search-filters {
    float: right;
    min-width: 50%;
    margin-right: 4.5%;

    text-align: right;
  }

  #obj-list {
    display: flex;

    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
 