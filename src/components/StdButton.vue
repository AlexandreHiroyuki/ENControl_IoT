<template>
  <a class="stdbutton">{{content}}</a>
</template>

<script>
export default {
  name: "StdButton",
  props: {
    content: String
  }
};
</script>

<style lang="scss" scoped>
.stdbutton {
  display: inline;
  padding: 0.625%;
  margin-left: 1%;

  border-radius: 10px;
  border-width: 1%;
  background-color: aqua;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.375);
}
:hover {
  transform: translate(2px, 2px);
  background-color: gold;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.375);
}
:focus {
  transform: translate(2px, 2px);
  background-color: gold;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.375);
}
</style>