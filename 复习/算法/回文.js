function isHui(str){
    let first = 0
    let last = str.length - 1
    while(first<last){
        if(str[first] !== str[last]){
            return false
        }
        first++
        last--
    }
    return true
}

function delet(str){
    if(isHui(str)){
        return true
    }
    for(let i = 0;i<str.length;i++){
        let newstr = str.slice(0,i) + str.slice(i+1)
        if(isHui(newstr)){
            return true
        }
    }
    return false
}

console.log(delet('abca'));