<template>
  <div id="app" class="bg-washed-yellow helvetica pa1">
    <h1 class="f2 b pa2">ENControl - Internet of Things</h1>
    <div id="nav">
      <RtButton path="/" page_name="Home"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import RtButton from "@/components/RtButton.vue";

export default {
  name: "App",
  components: {
    RtButton
  }
};
</script>


<style lang="scss">
// #app {
// font-family: "Avenir", Helvetica, Arial, sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// text-align: center;
// color: #2c3e50;

//   #title {
//     font-size: 2rem;
//     font-weight: bold;
//     padding-left: 2.5%;
//     margin: 0.75%;

//     text-align: left;
//   }
//   h2 {
//     font-size: 1.5rem;
//     font-weight: bold;
//     padding: 0.25%;
//     margin: 0.75%;
//   }
// }
// #nav {
//   width: 90%;
//   display: flex;
//   flex-wrap: wrap;

//   margin-left: 5%;
//   margin-right: 5%;
//   a {
//     font-weight: bold;
//     color: #000000;
//     &.router-link-exact-active {
//       background-color: goldenrod;
//     }
//   }
//   h2 {
//     text-align: left;
//     padding-left: 5%;
//   }
// }
</style>
