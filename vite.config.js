import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'

export default defineConfig({
  root: 'playground',
  plugins: [
    vue(),
    unocss({
      presets: [
        presetWind(),
      ],
      include: ['playground/**/*'],
    }),
  ],
  server: {
    open: true,
  },
})
