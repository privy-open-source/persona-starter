import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Router from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { kebabCase } from 'lodash-es'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const require = createRequire(import.meta.url)
const Meta    = require('@privyid/persona/components/meta.json')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Router(),
    Layouts(),
    Components({
      dts      : true,
      resolvers: [
        {
          type   : 'component',
          resolve: (name) => {
            const importPath: string = Meta[name]

            if (importPath)
              return { from: join('@privyid/persona', importPath) }
          },
        },
        {
          type   : 'component',
          resolve: (name) => {
            const icon  = kebabCase(name)
            const match = /^pi-([\w-]+)-(\d+)$/.exec(icon)

            if (match)
              return { from: join('@privyid/persona-icon', 'vue', match[1], `${match[2]}.vue`) }
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '~': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['@privyid/persona'],
    include: [
      '@testing-library/user-event',
      'interactjs',
      '@jill64/universal-sanitizer',
      'scroll-into-view',
      'webfontloader',
      'zxcvbn',
      'pdfjs-dist',
      'pdfjs-dist/web/pdf_viewer',
      'vuedraggable',
    ],
  },
})
