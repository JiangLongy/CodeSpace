// js 早期的js 没有模块化的概念 文件的加载顺序手动
// <script src="./a.js" defer></script> 加defer避免堵塞
// <script src="./b.js"></script>
// <script src="./c.js"></script>
// node commonjs 
//      js ？ 语言 -> 编译成二进制  V8引擎 chromeinum 内核 不包含浏览器UI
// node c++ 封装了chromeinum  js运行时 commonJS require module.exports  
// 后端天生复杂 
// 前端应用随着Vue/React 也变得复杂起来 ESmodule 应运而生
// 难道 node 用commonjs 前端用ESmodule ？ node也支持ESmodule
// mjs？ node 安装的新版本，可能 直接支持 ESmodule 如果老一点的版本用.mjs 后缀来声明 