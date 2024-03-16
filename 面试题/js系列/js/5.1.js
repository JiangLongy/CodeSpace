let obj = {
    a:1,
    b:{
        n:2
    },
    c:[1,2,3]
}

function deepCopy(obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof obj[key] === 'object' && obj[key] !== null){
                objClone[key] = deepCopy(obj[key])
            }else{
                objClone[key] = obj[key]
            }
        }
    }
    return objClone
}

let newObj = deepCopy(obj)
console.log(newObj)