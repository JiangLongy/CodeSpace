// let obj = {
//     a:1,
//     b:2
// }
// var arr=[]
// obj[arr]=3
// console.log(obj);
let map = new Map()
//如果需要放入初始值
//let map  = new Map([['name','老王']]);
//console.log(map);
let obj ={a:1}
map.set(obj,'hello')
console.log(map.get(obj));
map.forEach((item,index,set)=>{
    console.log(item,index,set);
 })