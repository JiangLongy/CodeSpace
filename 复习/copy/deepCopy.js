function deepCopy(arr){
    let res = Array.isArray(arr) ? [] : {}
    for(let key in arr){
        if(arr.hasOwnProperty(key)){
            if(typeof arr[key] === 'object'){
                res[key] = deepCopy(arr[key])
            }else{
                res[key] = arr[key]
            }
        }
    }
    return res
}
let obj  = {
    name: 'zhangsan',
    age: 18,
    address: {
        city: 'beijing',
        street: 'dongcheng'
    }
}
let obj1 = deepCopy(obj)
let obj2 = deepCopy2(obj)
console.log(obj1,obj2);


function deepCopy2(obj){
    let res = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object'){
                res[key] = deepCopy2(obj[key])
            }else{
                res[key] = obj[key]
            }
        }
    }
    return res
}

function deepCopy3(obj){
    let res = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object'){
                res[key] = deepCopy3(obj[key])
            }else{
                res[key] = obj[key]
            }
        }
    }
    return res
}

function deepCopy4(obj){  
    let res = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object'){
                res[key] = deepCopy4(obj[key])
            }else{
                res[key] = obj[key]
            }
        }
    }
    return res
}

function deepCopy(obj){
    let res = Array.isArray(obj)?[]:{}
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            if(typeof obj[i] === 'object'){
                res[i] = deepCopy(obj[i])
            }else{
                res[i] = obj[i]
            }
        }
    }
    return res
}