let arr = [1,1,2,3,3]
let obj = {
    a:1,
    b:2,
    c:3
}
let set = new Set([1,2,3,4]) //类数组

var arr2 = [1,1,2,1,5,'1']
function unique(arr){
    // let s = new Set()
    // let res = Array.from(s)
    // return res
    return[...new Set(arr)]
}
var unique = (arr) => [...new Set(arr)]
console.log(unique(arr2));
set.forEach((item,index,set)=>{
    console.log(item,index,set);
})
for(let item of set){
    console.log(item);
}
for(let item of set.entries()){
    console.log(item);
}
let s = '1216652;'
for(let item of s){
    console.log(item);
}