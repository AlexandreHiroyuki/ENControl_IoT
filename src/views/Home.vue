<template>
  <div class="home">
    <Info :msg="msg"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Info from "@/components/Info.vue";

export default {
  name: "home",
  components: {
    Info,
    HelloWorld
  },
  data: function() {
    return {
      msg: "README!"
    };
  }
};
</script>
