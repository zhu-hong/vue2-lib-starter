import { defineConfig } from 'rollup'
import commonPlugin from './rollup.config.plugin.js'

export default defineConfig({
  input: './src/index.js',
  output: {
    format: 'es',
    file: 'dist/index.js',
  },
  plugins: [
    ...commonPlugin,
  ],
})