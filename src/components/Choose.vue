<template>
  <div class="choose">
      <button v-for="(item, key) in values"
              v-bind:key="key"
              v-on:click="add(item)">
              {{key}}•{{ item.count }}
      </button>
  </div>
</template>

<script>
export default {
  name: 'Choose',
  data: function () {
    return {
      values: {
        p: {count: 0, values: {}},
        pre: {count: 0, values: {}},
        h1: {count: 0, values: {}},
        h2: {count: 0, values: {}},
        h3: {count: 0, values: {}},
        ol: {count: 0, values: {}},
        ul: {count: 0, values: {}},
        blockquote: {count: 0, values: {}}
      }
    }
  },
  methods: {
    add: function (item) {
      item.count === 5 ? item.count = 0 : item.count += 1
      this.emitToParent()
    },
    emitToParent: function () {
      let lol = JSON.stringify(this.values)
      this.$emit('add_config', lol)
    },
    getRandomInt: function (max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  },
  mounted () {
    this.values = {
      p: {count: this.getRandomInt(5), values: {}},
      pre: {count: this.getRandomInt(5), value: {}},
      h1: {count: this.getRandomInt(5), values: {}},
      h2: {count: this.getRandomInt(5), values: {}},
      h3: {count: this.getRandomInt(5), values: {}},
      ol: {count: this.getRandomInt(5), values: {}},
      ul: {count: this.getRandomInt(5), values: {}},
      blockquote: {count: this.getRandomInt(5), values: {}}}
    this.emitToParent()
  }
}
</script>

<style scoped>
.choose {
  background: #153047;
  width: 100vw;
  padding: 1rem;
}
button {
  font-family: 'Courier New', Courier, monospace;
  border: 0;
  padding: 1rem 1.5rem;
  background: #FFC400;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
}
button:focus { outline: none; }
</style>
