<template>
  <div id="app" class="bg-light-yellow helvetica">
    <header class="bg-light-blue shadow-1 flex flex-wrap">
      <h1 class="sans-serif dib f2 mb2 b w-90 pl3">Energy Network Control - Internet of Things</h1>

      <div class="bg-lightest-blue w-100">
        <router-link
          to="/"
          class="bg-light-yellow hover-bg-light-blue br4 pa2 ma1 dib blue"
        >All Components</router-link>
        <router-link
          to="/test"
          class="bg-light-yellow hover-bg-light-blue br4 pa2 ma1 dib blue"
        >Test</router-link>

        <button
          @mouseover="$store.commit('btShow')"
          @mouseleave="$store.commit('btHide')"
          class="b--none br4 pa2 bg-light-yellow hover-bg-light-blue blue"
        >
          +
          <span v-show="$store.state.bt_group_hover_state" class="di">Create a new group</span>
        </button>
      </div>
    </header>

    <router-view/>

    <footer class="bg-light-blue mt3 pa2 o-100 shadow-1 f7">
      <p class="ma1">&reg;ADDesenvolvedores</p>
      <p class="ma1">
        GitHub:
        <a href="https://github.com/ADDesenvolvedores">https://github.com/ADDesenvolvedores</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>


<style lang="scss">
a.router-link-exact-active {
  background-color: #ffd700;
}

/* Custom style particles */
.bg-dark-yellow {
  background-color: #ebe19a;
}
</style>
