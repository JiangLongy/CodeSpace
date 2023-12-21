var isAcronym = function(words, s) {
    let str = ''
    let len = words.length
    for(let i = 0;i<len;i++){
        str += words[i][0]
    }
    if(str === s){
        return true
    }else{
        return false
    }
};