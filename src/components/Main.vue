<template>
  <div class='main'>
    <div class='code'>
        <highlight-code lang='xml'>
          {{content}}
        </highlight-code>
    </div>
    <div class='escaped'>
      <span v-html='content'></span>
    </div>
  </div>
</template>

<script>
import {fillContent} from '../lorem/contentGen'
var prettifyHtml = require('prettify-html')

export default {
  name: 'Main',
  props: ['counters'],
  data: function () {
    return {
      content: {},
      html: '<p>lololol</p><ul><li>azeqsd</li><li>wc qzdqd</li><li>sfsefsfsf</li></ul>'
    }
  },
  watch: {
    immediate: true,
    counters: function (newVal, oldVal) { // watch it
      let parsed = JSON.parse(newVal)
      let content = fillContent(parsed)
      this.content = prettifyHtml(content.join(''))
    }
  }
}
</script>

<style scoped>
.main {
  background: #0C222F;
  flex: 1;
  color: white;
  overflow: auto;
}
pre {
  white-space: pre-wrap;
}
</style>

<style>
.main {
  display: flex;
  flex-direction: row;
}
.main .code {
  width: 50vw;
}
.main .code pre {
  margin: 0;
  height: 100%;
  box-sizing: border-box;
}
.main .code pre code.hljs {
  margin: 0;
  height: 100%;
  background: transparent;
  font-size: 1.5rem;
  padding: 2rem;
  box-sizing: border-box;
}
.main .escaped {
  width: 50vw;
  padding: 2rem;
  word-break: break-all;
  overflow: scroll;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}
.main .escaped pre {
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
