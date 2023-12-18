var isAnagram = function(s, t) {
    if(s.length != t.length)return false
    let len = s.length
    let set = new Set()
    let i = 0
    while(i<len-1){
        let idx1 = s.indexOf(s[i])
        let idx2 = t.indexOf(s[i])
        if(set.add(s[i+1])){
            
            while(idx1<len ){
                if(s.indexOf(s[i+1],idx1) !=-1 && t.indexOf(s[i+1],idx2 !=-1)){
                    idx1
                }
            }
        }
        i++
    }
};