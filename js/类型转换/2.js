console.log(Number({}));//NaN
console.log(Number([]));//0

//转换成字符串和转换成数字是不一样的
//转字符串 toString
let a = [1,2,3]
let time = new Date()
console.log(a.toString());//1,2,3
console.log(time.toString());//Tue Nov 21 2023 19:53:35 GMT+0800 (GMT+08:00)
//转数字 valueOf