import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlight.js'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false

Vue.use(VueHighlightJS, {
  languages: {
    xml
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
