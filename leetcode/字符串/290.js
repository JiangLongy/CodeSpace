var wordPattern = function(pattern, s) {
    let arr = s.split(" ")
    let set = new Set(arr)
    let len = pattern.length
    let map = new Map()
    if(len != arr.length){
        return false
    }
   for(let i = 0;i<len;i++){
    if(map.has(pattern[i] )){
        if(map.get([pattern[i]]) != arr[i]){
            return false
        }
    }else{
        map.set(pattern[i] , arr[i])
    }
   }
   if(set.size != map.size){
    return false
   }
   return true
};
console.log(wordPattern("abba","dog cat cat fish"));