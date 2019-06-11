<template>
  <div id="test">
    <History/>

    <p class="ma1 pa1 tc" @click="$store.commit('increment')">Click on Vuex to count: {{counter}}</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Pellentesque in quam non lorem pharetra hendrerit quis quis purus.</p>
    <p>Nullam eu risus massa.</p>
    <p>Maecenas sagittis, erat in faucibus posuere, libero eros molestie lacus, a ullamcorper metus libero vel diam.</p>
    <p>Aenean vel leo vitae ex volutpat elementum a sed sapien.</p>
    <p>Nunc at sollicitudin elit.</p>
    <p>Etiam enim sem, sodales eu convallis a, aliquam eget lectus.</p>
    <p>Nullam in odio ante.</p>
    <p>Phasellus ut est dolor.</p>
    <p>Maecenas et tempus sem.</p>
    <p>Fusce lacus elit, tincidunt sit amet justo at, condimentum dapibus elit.</p>
    <p></p>
    <p>Donec fermentum ullamcorper malesuada.</p>
    <p>In eu gravida arcu, vel eleifend dolor.</p>
    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <p>Vivamus tempor quis nisl non gravida.</p>
    <p>Maecenas vulputate fermentum eros nec pretium.</p>
    <p>Proin varius tortor eget augue accumsan tincidunt.</p>
    <p>Proin placerat massa non tellus accumsan lobortis.</p>
    <p>Sed hendrerit imperdiet diam, ac congue urna consectetur sit amet.</p>
    <p>Cras et ipsum ex.</p>
    <p>Nam dignissim augue est, vel vulputate nulla posuere vel.</p>
    <p>Morbi nulla felis, vulputate fermentum tempor non, egestas eget nisl.</p>
    <p>Proin leo metus, dictum vel velit nec, scelerisque consectetur nibh.</p>
    <p>Suspendisse sagittis, enim in molestie tincidunt, velit neque blandit leo, mollis sagittis magna neque at augue.</p>
    <p>Sed eget vulputate turpis, non tincidunt velit.</p>
    <p>Integer at convallis urna, nec accumsan enim.</p>
    <p>Vestibulum sed sem ullamcorper, lobortis dui in, ultrices lorem.</p>
    <p>Mauris euismod urna et est suscipit viverra.</p>
    <p>Integer nec nisl tempus, malesuada risus a, lacinia augue.</p>
    <p>Donec varius euismod erat, at aliquam ex eleifend vel.</p>
    <p>Aliquam erat volutpat.</p>
    <p>Pellentesque libero leo, posuere vel varius in, lacinia eget risus.</p>
    <p>Integer imperdiet mauris at lacus blandit molestie.</p>
    <p>Praesent varius ipsum quis quam ultricies venenatis.</p>
  </div>
</template>

<script>
import History from "@/components/History.vue";

export default {
  name: "Test",
  components: {
    History
  },
  computed: {
    counter: function() {
      return this.$store.state.count;
    }
  }
};
</script>
 
<style lang="scss">
</style>
 