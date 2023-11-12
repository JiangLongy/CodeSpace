//先编译再执行
var a = 1
var b = 'hello word'
function foo(){
    var c = true 
    console.log(a);
}
//console.log(c); //报错
//函数在函数调用时编译
foo()
//console.log(c); //依旧报错
