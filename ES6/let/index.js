console.log(a);
var a=1
//声明提升
//var a 
//console.log(a);
//a=1;
console.log(b);
let b = 1
//报错 不进行声明提升

let a = 1
if(true){
    //console.log(a);//暂时性死区
    let a =1
}
//var声明的全局变量挂载在window上而let不会
var a
console.log(window.a);
//报错 不能重复赋值
const a = 6
a = 7
//正确，const声明的引用类型对象的值在堆中，在栈中保存堆中的地址
const obj = {
    name : '666'
}
obj.name = '777'