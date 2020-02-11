<template>
  <div
    class="controller w-30 ma2 shadow-3 pa2 br4 br--right br--bottom"
    :class="[status ? 'bg-green' : 'bg-red']"
  >
    <input
      class="w-90 bw-0 bg-transparent bt-0 br-0 bl-0 b--light-blue"
      placeholder="Type here"
      v-model.trim="$store.state.controllers[index].id"
    />
    <h1 class="b f4 pa1 mb1">{{obj_name}}</h1>
    <p class="mt2">
      Status:
      <button
        class="di b--solid br2 bg-light-yellow hover-bg-light-blue pa1"
        :class="[status ? 'b--green' : 'b--light-red']"
        @click="$store.commit('controllerSwitch', index)"
      >{{showStatus}}</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Controller",
  props: {
    index: Number
  },
  computed: {
    obj_name: function() {
      return this.$store.state.controllers[this.index].id;
    },
    status: function() {
      return this.$store.state.controllers[this.index].status;
    },
    showStatus: function() {
      if (this.status) return "ON";
      else return "OFF";
    }
  }
};
</script>

<style lang="scss" scoped>
.controller {
  @media (max-width: 600px) {
    width: 45%;
  }
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #96ccffbb);

  h1 {
    background-image: linear-gradient(
      to right,
      rgba(200, 200, 200, 0),
      #96ccff,
      rgba(200, 200, 200, 0)
    );
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
}
</style>
