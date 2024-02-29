let a = 1
// setTimeout(()=>{
//     console.log(2);
// },2000)

setTimeout(()=>{ // 多线程 锁 解锁
    a = 10
},1000)
setTimeout(()=>{
    a = 10
},2000)
let b = 3
console.log(b);