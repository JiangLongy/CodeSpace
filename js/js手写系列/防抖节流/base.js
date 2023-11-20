function foo(){
    //console.log(arguments);//类数组，代表所有参数的集合
    console.log(Array.from(arguments));//把类数组变成数组
}
foo(1,2);

let arr = [1,2,3,4];
console.log(...arr);