var longestPalindrome = function (s) {
    if (s.length == 1 || s.length == 0) {
        return s
    }
    let max = 0, maxstr = ''
    for(let i =0 ;i<s.length;i++){
        let str1 = ishui(s,i,i)
        let str2 = ishui(s,i,i+1)
        if(str1.length>max){
            max = str1.length
            maxstr=str1
        }
        if(str2.length>max){
            max = str2.length
            maxstr=str2
        }

    }
    return maxstr
};
function ishui(s,l,r){
    while(l>=0 && r<s.length && s[l] === s[r]){
        l--;
        r++
    }
    return s.slice(l+1,r)
}
console.log(longestPalindrome('bb'));