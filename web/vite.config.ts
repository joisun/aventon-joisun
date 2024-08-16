import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// not support esm
import cdn from 'vite-plugin-cdn-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cdn({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: `https://cdn.jsdelivr.net/npm/vue@3.4.29/dist/vue.global.prod.js`,
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: `https://cdn.jsdelivr.net/npm/vue-router@4.3.3/dist/vue-router.global.prod.js`,
        },
        // {
        //   name: 'zod',
        //   var: 'zod',
        //   path: `https://cdn.jsdelivr.net/npm/zod@3.23.8/lib/index.mjs`,
        // },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      output:{
        // 分包
        manualChunks:{
          // 'vue-vendor':['vue', 'vue-router'],
          'zod': ['zod']
        }
      }
      // 还需要手动在html中写入
      // external: ['vue', 'vue-router','zod'],
      // output:{
      //   paths:{
      //     vue: 'https://cdn.jsdelivr.net/npm/vue@3.4.29/dist/vue.runtime.esm-browser.prod.js',
      //     'vue-router': 'https://cdn.jsdelivr.net/npm/vue-router@4.3.3/dist/vue-router.esm-browser.js',
      //     zod:'https://cdn.jsdelivr.net/npm/zod@3.23.8/lib/index.mjs'
      //   }
      // }
    },
  },
})
