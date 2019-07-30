<template>
  <div class="choose">
    <div class="choose-content">
      <button class="component" v-for="(item, key) in values"
              v-bind:key="key"
              v-on:click="add(item)">
              {{key}}<span>{{ item.count }}</span>
      </button>
      <button class="random" v-on:click="randomize()">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#153047" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20L20.2 3.8M21 16v5h-5M15 15l5.1 5.1M4 4l5 5"/></svg>
        Randomize
      </button>
    </div>
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
        blockquote: {count: 0, values: {}},
        table: {count: 0, values: {}}
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
    },
    randomize: function () {
      this.values = {
        p: {count: this.getRandomInt(5), values: {}},
        pre: {count: this.getRandomInt(5), value: {}},
        h1: {count: this.getRandomInt(5), values: {}},
        h2: {count: this.getRandomInt(5), values: {}},
        h3: {count: this.getRandomInt(5), values: {}},
        ol: {count: this.getRandomInt(5), values: {}},
        ul: {count: this.getRandomInt(5), values: {}},
        blockquote: {count: this.getRandomInt(5), values: {}},
        table: {count: this.getRandomInt(5), values: {}}
      }
      this.emitToParent()
    }
  },
  mounted () {
    this.randomize()
  }
}
</script>

<style scoped lang="scss">
.choose {
  background: #153047;
  width: 100vw;
  overflow: auto;
  box-sizing: border-box;
  .choose-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    padding: 1.5rem 1rem;
    button {
      &.component {
        font-family: 'Courier New', Courier, monospace;
        border: 0;
        padding: 0.7rem 1.1rem;
        background: transparent;
        border-radius: 0.5rem;
        margin: 0 1rem;
        font-weight: bold;
        font-size: 1.5rem;
        color: #FFC400;
        cursor: pointer;
        span {
          background: #FFC400;
          color: #153047;
          padding: 0.3rem 0.5rem 0rem;
          border-radius: 3px;
          margin-left: 0.5rem;
        }
        &:focus {
          outline: none;
        }
        &:hover {
          color: #009c68;
          span {
            background: #009c68;
          }
        }
      }
      &.random {
        font-family: 'Courier New', Courier, monospace;
        border: 0;
        padding: 0.5rem 1rem;
        background: #FFC400;
        border-radius: 0.5rem;
        margin: 0 1rem;
        font-weight: bold;
        font-size: 1.5rem;
        color: #153047;
        cursor: pointer;
        display: inline-flex;
        margin-right: 1rem;
        svg {
          height: 1.5rem;
          width: 1.5rem;
          margin: 0 1rem 0 0;
        }
      }
    }
  }
}
</style>
