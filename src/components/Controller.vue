<template>
  <div class="controller">
    <input v-model="obj_name" placeholder="Digite aqui">
    <h1>{{obj_name}}</h1>
    <p>
      Status:
      <button class="stdbutton" @click="toggle()">{{showStatus}}</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Controller",
  data: function() {
    return {
      obj_name: "Default",
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
  width: 25%;
  min-height: 40vh;
  margin-left: 1%;
  margin-right: 5%;
  padding: 1%;

  border-radius: 10px 30px 30px 30px;
  border-width: 1%;
  background-color: greenyellow;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgb(255, 217, 0, 0.75)
  );
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.375);

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

  .stdbutton {
    display: inline;
    padding: 0.625%;
    margin-left: 1%;

    border-radius: 10px;
    border-width: 1%;
    background-color: aqua;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.375);
  }
  .stdbutton:hover {
    transform: translate(2px, 2px);
    background-color: gold;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.375);
  }
  .stdbutton:focus {
    transform: translate(2px, 2px);
    background-color: gold;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.375);
  }
}
</style>
