<template>
  <div id="ctrl-table">
    <Info :msg="msg"/>
    <div id="search-filters">
      <StdButton class="search-button" content="All On"/>
    </div>
    <h2>Component List:</h2>

    <div id="obj-list">
      <Controller/>
    </div>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
import StdButton from "@/components/StdButton.vue";
import Controller from "@/components/Controller.vue";

export default {
  name: "ControlTable",
  components: {
    Info,
    StdButton,
    Controller
  }
};
</script>
 
 <style lang="scss">
#ctrl-table {
  h2 {
    text-align: left;

    padding-left: 5%;
    width: 50%;
  }

  #search-filters {
    float: right;
    min-width: 50%;
    margin-right: 4.5%;

    text-align: right;
  }

  #obj-list {
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
 