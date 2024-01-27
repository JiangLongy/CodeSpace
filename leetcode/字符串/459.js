var repeatedSubstringPattern = function(s) {
    for(let i = 0;i<s.length/2;i++){
        let l = i+1
        let k = l+i+1
        let str = s.slice(0,l)
        while(k<=s.length){
           let str2 = s.slice(l,k)
            if(str==str2 && k==s.length){
                return true
            }else if(str==str2){
                l = k
                k = l+i+1
               continue
            }else{
                break
            }
           
        }
    }
    return false
};

console.log(repeatedSubstringPattern("ababababab"))