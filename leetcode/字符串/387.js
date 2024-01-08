var firstUniqChar = function(s) {
    let set = new Set()
    for(let i = 0;i<s.length;i++){
        if(s.indexOf(s[i],i+1) == -1 && !set.has(s[i])){
            return i
        }else{
            set.add(s[i])
        }
    }
    return -1
};
console.log(firstUniqChar("leetcode"));