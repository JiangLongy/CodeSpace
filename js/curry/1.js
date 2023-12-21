function add(a,b,c){
    return a+b+c;
}
// 函数的颗粒化
function curry(fn){
    //收集参数 闭包 arr
    //到位了 运行 arr.length == fn.length fn(...arr)
    //返回收集参数的函数
    // ... rest运算符 args是数组 闭包空间 自由变量
    let judge = (...args)=>{
        if(args.length === fn.length) return fn(...args) //退出条件
        //返回函数，继续收集函数
        return (...arg) => judge(...args,...arg)
    }
    return judge
}
//有时候不会一次性给到 前端的交互
//js curry 颗粒化 每次接收一个参数add(1)(2)(3)
console.log(add.length);
const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3));