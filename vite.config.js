import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import unocss from 'unocss/vite'
import { presetMini } from 'unocss'
import nested from 'postcss-nested'

export default defineConfig({
  root: 'playground',
  plugins: [
    vue({
      style: {
        postcssPlugins: [
          nested(),
        ],
      }
    }),
    unocss({
      presets: [
        presetMini(),
      ],
    }),
  ],
  server: {
    open: true,
  },
})
