import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import UnoCSSPlugin from 'unocss/vite'
import { presetUno } from 'unocss'

export default defineConfig({
  root: 'playground',
  plugins: [
    createVuePlugin(),
    UnoCSSPlugin({
      presets: [
        presetUno(),
      ],
    }),
  ],
  server: {
    open: true,
  },
})
