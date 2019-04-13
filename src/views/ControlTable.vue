<template>
  <div id="ctrl-table">
    <img alt="ENC Logo" src="../assets/logo.png">

    <div id="aside" class>
      <History/>
    </div>

    <h2>Component List:</h2>

    <div id="obj-list">
      <Controller @click="toggle()" v-for="obj in control" :key="obj.id"/>
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

// #aside {
//   float: right;
//   min-width: 30%;
//   margin-right: 5%;

//   text-align: left;
// }
</style>
 