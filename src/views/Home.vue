<template>
  <div class="home">
    <Info :msg="msg"/>
    <img alt="ENC Logo" src="../assets/logo.png">

    <div id="aside">
      <History/>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Info from "@/components/Info.vue";
import History from "@/components/History.vue";

export default {
  name: "home",
  components: {
    Info,
    HelloWorld,
    History
  },
  data: function() {
    return {
      msg: "README!"
    };
  }
};
</script>

<style lang="scss">
#aside {
  float: right;
  min-width: 30%;
  margin-right: 5%;

  text-align: left;
}
</style>
