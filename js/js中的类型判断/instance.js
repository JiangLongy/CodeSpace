//原始类型
let str = 'hello'//String
let num = 123 //number
let flag = false //boolean
let und = undefined //undefined
let nu = null //null
let big = 123n//bigInt
let s = Symbol('hello')//Symbol 用来定义独一无二的值

//引用类型
let obj = {}
let arr = []
let fn = function(){}
let date = new Date()
//判断
console.log(obj instanceof Object);
console.log(arr instanceof Array);
console.log(fn instanceof Function);
console.log(date instanceof Date);//instanceof 可以判断所有引用类型
console.log(str instanceof String);//false instanceof 无法判断原始类型
console.log(arr instanceof Object);//true 

console.log(arr instanceof Object);