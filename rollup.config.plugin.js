import Commonjs from '@rollup/plugin-commonjs'
import NodeResolve from '@rollup/plugin-node-resolve'
import Postcss from 'rollup-plugin-postcss'
import Vue from 'rollup-plugin-vue'
import CssNano from 'cssnano'

export default [
  Commonjs(),
  NodeResolve(),
  Vue({
    css: false,
  }),
  Postcss({
    extract: 'style.css',
    plugins: [
      CssNano(),
    ],
  }),
]