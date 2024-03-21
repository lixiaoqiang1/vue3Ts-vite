import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
 // 引入@vitejs/plugin-legacy
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue()],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // },
  css: {
    preprocessorOptions: {
      scss: {
        // 引入 mixin.scss 这样就可以在全局中使用 mixin.scss中预定义的变量了
        // 给导入的路径最后加上 ; 
        additionalData: '@import "@/assets/styles/mixin.scss";'
      }
    }
  },
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    host:"0.0.0.0",
    open:false,
    port:4000,
    // https:false,
    // hotOnly:false,
    proxy: {
      '/api': {
        target: 'https://phpapi.q06.cn',
        changeOrigin: true,             //是否跨域
        rewrite:path=>path.replace(/^\/api/,'') // 设置重写的路径
        
      },
      // '/suoker': {
      //   target: 'http://www.sr.com',
      //   rewrite: (path) => path.replace(/^\/sr/, ''),
      //   changeOrigin: true,             //是否跨域
      // },
      // '/asp': {
      //   target: 'http://localhost:1100/api/',
      //   rewrite: (path) => path.replace(/^\/asp/, ''),
      //   changeOrigin: true,             //是否跨域
      // },
 
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  }
 
})