import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
 
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
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