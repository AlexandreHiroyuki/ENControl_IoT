<template>
  <div id="other">
    <Info :msg="msg"/>
  </div>
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "Other",
  components: {
    Info
  },
  data: function() {
    return {
      msg: "Some Text."
    };
  }
};
</script>
