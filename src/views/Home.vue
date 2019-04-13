<template>
  <div class="home">
    <img alt="ENC Logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import History from "@/components/History.vue";

export default {
  name: "home",
  components: {
    History
  },
  data: function() {
    return {
      msg: "README!"
    };
  }
};
</script>