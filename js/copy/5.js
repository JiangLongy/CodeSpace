//手动实现深拷贝
let obj = {
    name:'www',
    age:18,
    like:{
        type: 'coding'
    }
}
function deepCopy(obj){
    let objCopy = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] instanceof Object){
                objCopy[key] = deepCopy(objCopy[key])
            }else{
                objCopy[key] = obj[key]
            }
        }
    }
    return objCopy
}