// main.js 入口文件
import { createApp } from 'vue'
//根组件 vue开发的基本单元
import App from './App.vue'

//原生js不支持Vue 需要挂载 js DOM 低效率 vue开创新世界 mvvm的世界 
//原生js不支持mvvm
//web app
createApp(App).mount('#app')
