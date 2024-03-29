// vue的跨端功能  大前端
// 浏览器（pc/mobile） 小程序端（wxml）服务器端（没有视图DOM 有虚拟DOM）
// 客户端 （APP uniapp）exe桌面端（windows Linux）
// vue 模块化 响应式模块 独立于其他模块的
// UI模块 独立出来 
// 一份代码打包成各种应用 uniapp 利用vue的UI模块独立于其他模块
// UI模块，可拔插的
// 响应式 虚拟DOM 平台无关的渲染逻辑
// {
//     "ul":{
//         "li":{
//             "class":"item",
//             "style":{
//                 "color":"red"
//             },
//             "text":"1"
//         }
//     }
// }
// 现代UI开发的核心 = 响应式和虚拟DOM MVVM
// 聚焦于业务，而不是api
// const {effect,reactive} = require('@vue/reactivity')
const {effect,reactive} = require('./src/reactivity')
let dummy
// 响应式机制的主要功能是: 
// 把主要javascript对象封装成为响应式对象 拦截数据的获取和修改操作 实现依赖数据的自动化更新
const counter = reactive({num1:1,num2:2})
//通过effect注册回调函数 响应式地通知effect执行函数
effect(()=>{
    dummy = counter.num1 + counter.num2
    console.log(dummy)
})
setInterval(()=>{
    counter.num1++
    // counter.num2++
},1000)


