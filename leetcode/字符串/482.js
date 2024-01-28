var licenseKeyFormatting = function(s, k) {
    s = s.toUpperCase()
    let res = ''
    let len = 0
    for(let i = s.length-1;i>=0;i--){
        if(s[i] != '-' && len != k){
            res+=s[i]
            len++
        }else if(len == k && s[i] != '-'){
            res+='-'+s[i]
            len = 1
        }else if(s[i] == '-'&&len == k){
            res+=s[i]
            len = 0
        }    
    }
    return res.split('').reverse().join('')
};
console.log(licenseKeyFormatting("--a-a-a-a--", 4))