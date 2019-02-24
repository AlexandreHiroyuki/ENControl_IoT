<template>
  <div class="readme">
    <h1>Information</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
.readme {
  display: inline-block;
  width: 90%;

  border-radius: 10px 30px;
  border-width: 1%;

  background-color: rgba(125, 255, 255, 0.625);

  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.375);

  h1 {
    text-align: left;
    padding-left: 5%;

    background-image: linear-gradient(
      to right,
      rgba(200, 200, 200, 0),
      rgba(0, 255, 255, 0.5),
      rgba(200, 200, 200, 0)
    );
    background-size: 100% 2px;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  p {
    text-align: left;
    padding-left: 5%;
  }
}
</style>
