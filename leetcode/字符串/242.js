var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false
    }
   let set = new Set()
   for(let i = 0;i<s.length;i++){
    if(!set.has(s[i])){
        set.add(s[i])
        if(sum(s,s[i]) != sum(t,s[i])){
            return false
        }
    }
   }
   return true
};
function sum(str,a){
    let index = str.indexOf(a)
    count = 0
    while(index != -1){
        index = str.indexOf(a,index+1)
        count++
    }
    return count
}
console.log(sum('nagaram','a'));