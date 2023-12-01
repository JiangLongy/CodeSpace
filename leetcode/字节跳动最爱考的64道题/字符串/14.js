var longestCommonPrefix = function(strs) {
    let maxstr=''
    for(let i = 1;i<strs[0].length;i++){
        let same = strs[0].slice(0,i)
        for(let j = 0;j < strs.length;j++){
            if(i>strs[j].length){
                break
            }
            if(strs[j].slice(0,i) != same){
                break
            }
            if(j === strs.length-1 && strs[j].slice(0,i) === same){
                maxstr =  same
            }
        }
    }
    return maxstr
};
console.log(longestCommonPrefix(["flower","flow","flight"]));