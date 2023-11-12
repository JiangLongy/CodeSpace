let str = 'hello'//String
let num = 123 //number
let flag = false //boolean
let und = undefined //undefined
let nu = null //null
let big = 123n//bigInt
let s = Symbol('hello')//Symbol 用来定义独一无二的值
let s2 = Symbol("hello")
console.log(s === s2) //false /== 值相等/ === 值且类型相等

console.log(Object.prototype.toString.call(str));
console.log(Object.prototype.toString.call(num));
console.log(Object.prototype.toString.call(flag));
console.log(Object.prototype.toString.call(und));
console.log(Object.prototype.toString.call(nu));
console.log(Object.prototype.toString.call(big));
console.log(Object.prototype.toString.call(s));
