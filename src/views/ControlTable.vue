<template>
  <div id="ctrl-table">
    <div id="aside" class>
      <History/>
    </div>

    <h2>Component List:</h2>

    <div id="obj-list" class="flex flex-wrap">
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
          id: "Banana"
        }
      ]
    };
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

  #obj-list {
    display: flex;

    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
 