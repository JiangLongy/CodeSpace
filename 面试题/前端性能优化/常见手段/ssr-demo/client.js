// 该文件运行在浏览器中
import { createApp } from 'vue'

const app = createApp({
  // ...和服务端完全一致的应用实例
})

// 在客户端挂载一个 SSR 应用时会假定
// HTML 是预渲染的，然后执行激活过程，
// 而不是挂载新的 DOM 节点
app.mount('#app')