<template>
  <div id="ctrl-table">
    <Info :msg="msg"/>
    <div id="search-filters">
      <StdButton class="search-button" content="All On"/>
    </div>
    <h2>Component List:</h2>

    <div id="obj-list">
      <Controller
        @click="toggle()"
        v-for="obj in control"
        :status="obj.status"
        :obj_name="obj.name"
        :key="obj.id"
      />
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
          id: 1,
          name: "Lampada 1",
          status: true
        },
        {
          id: 2,
          name: "Motor 2",
          status: false
        }
      ]
    };
  },
  methods: {
    toggle: function() {}
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
 