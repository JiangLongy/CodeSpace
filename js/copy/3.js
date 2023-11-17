//浅拷贝的实现原理
let obj = {
    name:'www',
    age:18,
    like:{
        type: 'coding'
    }
}
let arr = [1,'a',null]
function shalldowCopy(obj){
    //类型判断
    if(typeof obj !== 'object' || obj == null) return 
    let objCopy = obj instanceof Array ? []:{}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                objCopy[key] = obj[key] 
            }
        }
    return objCopy
}
let newObj = shalldowCopy(obj)
obj.like.type = 'sleeping'
console.log(newObj.like.type);
