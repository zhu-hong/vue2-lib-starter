import Vue from 'vue'
import App from './App.vue'

import 'uno.css'
import '@unocss/reset/normalize.css'
import './assets/style.css'

import MyUILib from '../../src'

Vue.use(MyUILib)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')