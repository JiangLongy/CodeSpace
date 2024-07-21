// var a = 1
// function b(){
//     console.log(a);
//     var a = 2
//     console.log(a);
// }
// b()

//请问下面的console.log()输出什么？
function fn(a) {
    console.log(a);
    var a = 123//变量赋值
    console.log(a);
    function a() { }//函数声明
    console.log(a);
    var b = function () { }//变量赋值（函数表达式）
    console.log(b);
    function d() { }//函数声明
  }
  fn(1)//函数调用