import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS()],
  // 也可以使用数组方式
  resolve: {
    alias: [{
            find: '@',
            replacement: resolve(__dirname, 'src')
        },
        {
          find: 'views',
            replacement: resolve(__dirname, 'src/view')
        }
    ],
  },
  // 配置less
  css: {
    preprocessorOptions: {
        less: {
          charset: false,
          additionalData: '@import "./src/assets/css/base.less";',
            // modifyVars: {
            //     hack: `true; @import (reference) "${resolve("src/assets/css/base.less")}";`,
            // },
            // javascriptEnabled: true,
        },
    },
},
build: {
  chunkSizeWarningLimit: 1000,
  outDir: "dist",
  // 9月更新
  assetsDir: "assets", //指定静态资源存放路径
  // assetsPublicPath:'',
  sourcemap: true, //是否构建source map 文件
  terserOptions: {
    // 生产环境移除console
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  },
},
base:'/h5/',
 // 配置跨域
 server: {
   port:8080,
    proxy: {
      "/basic-api":{
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
      }
    },
  },
})
