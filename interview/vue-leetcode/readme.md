- 位运算 & |  遵守了 && || 的含义 可以在二进制层面运算 性能更好
- 聊vue patch的过程要聊到位运算
    更新 
    old new 
    DOM的更新是在浏览器的渲染层 而js是在V8引擎主线程
    新旧对象对比 
    patch 一次收集所有需要的更新(patches)，通知浏览器更新

let num1 = 10//1010
let num2 = 5 //0101

let res = num1 & num2
console.log(res)

n  n
O(n^2)
结点之间还要比对属性，文本...O(n^3)

[a,b,c,d] [a,b,c,d] [a,c,d] [c,b,a]

