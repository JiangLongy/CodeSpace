let obj = {
    a:1,
    b:2
}

let n = obj.a
Object.defineProperty(obj,'c',{
    // get(){
    //     return n
    // },
    // set(newVal){
    //     n = newVal
    // },
    enumerable:false,//是否可枚举
    // writable:false,//是否可写
    value:1000,//默认值
    configurable:false//是否可配置（删除）
})
// for(let key in obj){
//     console.log(key)
// }
