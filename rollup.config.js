import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import nested from 'postcss-nested'
import cssnano from 'cssnano'

export default defineConfig({
  input: './src/index.js',
  output: {
    format: 'esm',
    file: 'dist/index.js',
    sourcemap: false,
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    vue({
      css: false,
    }),
    postcss({
      extract: 'style.css',
      plugins: [
        nested(),
        cssnano(),
      ],
    }),
  ],
})