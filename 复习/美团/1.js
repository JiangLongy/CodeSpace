// [({abcdef}ghjkl)1234]
let str = '[({abcdef}ghjkl)1234]]'
function a(str){
    let arr = []
    for(let i = 0;i<str.length;i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            arr.push(str[i])
        }else if(str[i] === ')' || str[i] === '}' || str[i] === ']'){
            let a = arr.pop()
            if(!pipei(a,str[i])){
                return false
            }

        }
    }
    return true
}

function pipei(s1,s2){
    if(s1 === '(' && s2 === ')'){
        return true
    }
    if(s1 === '{' && s2 === '}'){
        return true
    }
    if(s1 === '[' && s2 === ']'){
        return true
    }
    return false
}

console.log(a(str));