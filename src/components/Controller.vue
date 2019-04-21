<template>
  <div
    class="controller w-30 ma3 shadow-3 pa2 br4 br--right br--bottom"
    :class="{'bg-green': status, 'bg-red': !status}"
  >
    <input class="w-90" v-model="obj_name" placeholder="Digite aqui">
    <h1>{{obj_name}}</h1>
    <p>
      Status:
      <button
        class="di b--solid br2 bg-yellow hover-bg-light-blue pa1"
        :class="{'b--green': !status, 'b--light-red': status}"
        @click="toggle()"
      >{{showStatus}}</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Controller",
  props: {
    obj_name: String
  },
  data: function() {
    return {
      status: true
    };
  },
  computed: {
    showStatus: function() {
      if (this.status) return "ON";
      else return "OFF";
    }
  },
  methods: {
    toggle: function() {
      this.status = !this.status;
    }
  }
};
</script>

<style lang="scss" scoped>
.controller {
  // background-color: greenyellow;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgb(255, 217, 0)
  );

  h1 {
    font-size: 1.25rem;
    font-weight: bold;

    padding: 1.5%;
    margin-bottom: 1.5%;

    background-image: linear-gradient(
      to right,
      rgba(200, 200, 200, 0),
      goldenrod,
      rgba(200, 200, 200, 0)
    );
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  p {
    margin-top: 5%;
  }
}
</style>
