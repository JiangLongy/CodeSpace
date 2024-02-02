var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let left = 0;
    let max = 0
    for(let i = 0;i<s.length;i++){
        if(map.has(s[i]) && map.get(s[i])>=left){
            left = map.get(s[i])+1
        }
        map.set(s[i],i)
        max = Math.max(max,i-left+1)
    }
    return max
};
console.log(lengthOfLongestSubstring("abcabcbb"))