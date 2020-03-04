<template>
  <div id="app">
    <Choose @add_config="addConfig"/>
    <Main v-bind:counters="values"/>
    <Footer/>
    test
  </div>
</template>

<script>
import Choose from './components/Choose.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Main,
    Choose,
    Footer
  },
  data: function () {
    return {
      values: {}
    }
  },
  methods: {
    addConfig (value) {
      this.values = value
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  font-size: 10px;
  background: #0C222F;
  font-family: 'Courier New', Courier, monospace;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
