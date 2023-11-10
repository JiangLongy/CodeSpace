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

//判断类型
console.log(typeof str)//type of(str)
//...
console.log(typeof nu)//object 判断null类型为object类型(bug)
console.log(typeof arr) // object typeof 判断所有引用类型都为object(除function)


