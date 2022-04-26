import App from './App.vue'
import Vue from 'vue'
import Go from '../dist/lib.js'
import '../dist/style.css'

import 'virtual:windi.css'

Vue.config.productionTip = false

Vue.use(Go)

new Vue({
  render: (h) => h(App),
}).$mount('#app')