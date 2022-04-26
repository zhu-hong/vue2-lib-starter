import { Button } from 'element-ui'

import './theme/fonts/element-icons.woff'
import './theme/fonts/element-icons.ttf'

import Go from './components/Go.vue'

export default {
  install: (Vue) => {
    Vue.component(Button.name, Button)
    Vue.component(Go.name, Go)
  },
}