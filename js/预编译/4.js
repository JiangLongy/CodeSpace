// Go :{
//     global:undefined 100
//     fn : function fn(){}
// }
var global = 100
function fn(){
    console.log(global);
}
// Ao:{
//
// }
fn()
//有一个调用栈
//全局执行上下文GO先入栈
// 全局执行上下文中有
//变量环境 ：var声明的变量 global = 100 fn = func(){}
//词法环境：let，const声明的变量
//fn执行上下文再入栈
//此时fn中未声明变量和方法
//调用console.log(global);
//先找fn的词法环境，再找变量环境，没找到，但是有一个指针指向全局执行上下文
//于是又在全局执行上下文的词法环境中找，没找到在变量环境找