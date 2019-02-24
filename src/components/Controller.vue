<template>
  <div class="controller">
    <h1>{{obj_name}}</h1>

    <p>Status:
      <StdButton :content="showStatus"/>
    </p>
  </div>
</template>

<script>
import StdButton from "@/components/StdButton.vue";

export default {
  name: "Controller",
  components: {
    StdButton
  },
  props: {
    status: Boolean,
    obj_name: String
  },
  computed: {
    showStatus: function() {
      if (this.status) return "ON";
      else return "OFF";
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
}
</style>
