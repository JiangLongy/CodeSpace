import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})

//vite 帮我们启动了一个node服务，帮我们朝'localhost:3000'发送请求，因为
// 后端没有同源策略，所以vite中的node服务能直接请求到数据，再提供给前端使用
