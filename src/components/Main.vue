<template>
  <div class='main'>
    <div class='code'>
        <highlight-code lang='xml'>
          {{content}}
        </highlight-code>
        <textarea id='code-copy' v-model="content"></textarea>
    </div>
    <div class='escaped'>
      <span id="rendered" v-html='content'></span>
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
    counters: function (newVal) {
      let parsed = JSON.parse(newVal)
      let content = fillContent(parsed)
      this.content = prettifyHtml(content.join(''))
    }
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: row;
  background: #0C222F;
  flex: 1;
  color: white;
  overflow: auto;
  pre {
    white-space: pre-wrap;
  }
  .code {
    width: 50vw;
    padding: 2rem;
    margin: 0;
    box-sizing: border-box;
    overflow: auto;
    pre {
      margin: 0;
      height: 100%;
      box-sizing: border-box;
      code.hljs {
        margin: 0;
        height: 100%;
        background: transparent;
        font-size: 1.5rem;
        box-sizing: border-box;
        padding: 0;
        overflow: inherit;
      }
    }
    #code-copy {
      display: none;
    }
  }
  .escaped {
    width: 50vw;
    margin: 0;
    padding: 2rem;
    border-left: 2px dashed #153047;
    word-break: break-all;
    overflow: scroll;
    box-sizing: border-box;
    font-size: 1.5rem;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    pre {
      overflow-x: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
      color: #f44336;
      border-left: 2px solid #f44336;
      padding-left: 1rem;
    }
    code {
      color: #E91E63;
    }
    p {
      color: #9C27B0;
      letter-spacing: 0.5px;
    }
    blockquote {
      color: #673AB7;
      padding: 1rem;
      border: 2px dotted #673AB7;
      margin-left: 0;
      width: 100%;
      box-sizing: border-box;
      border-radius: 1rem;
    }
    table {
      color: #3F51B5;
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
      tr, th, td {
        border: 2px solid #3F51B5;
        padding: 0.5rem;
      }
    }
    ul {
      color: #2196F3;
    }
    ol {
      color: #03A9F4;
    }
    h1 {
      color: #00BCD4;
    }
    h2 {
      color: #009688;
    }
    h3 {
      color: #4CAF50;
    }
  }
}
@media screen and (max-width: 580px) {
  .main {
    .code {
      width: 100vw;
      scroll-padding: 1rem;
    }
    .escaped {
      display: none;
    }
  }
}

</style>
