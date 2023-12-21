//不能直接操作字符串，要先转化为数组才能操作
var reverseVowels = function(s) {
    let str = s.split('')
    let left = 0,right = s.length-1
    let list = new Set(['a','e','i','o','u','A','E','I','O','U'])
    while(left<right){
        if(!list.has(str[left])){
            left++
        }else if(list.has(str[right])){
            let temp = str[left]
            str[left] = str[right]
            str[right] = temp
            left++
            right--
        }else{
            right--
        }
    }
    return  str.join('');
};
console.log(reverseVowels("hello"));