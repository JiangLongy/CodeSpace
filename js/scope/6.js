//作用域是自己形成的区域
//词法作用域是存在的区域
function foo(str, a){
    eval(str)
    console.log(a,b);
}
foo('',1)//1 undefined
foo('var b = 3',1)//eval将str变成语句 欺骗词法作用域
var b = 2