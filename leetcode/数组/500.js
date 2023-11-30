var findWords = function(words) {
    let arr= []
    let set1=new Set(['q','w','e','r','t','y','u','i','o','p'])
    let set2=new Set(['a','s','d','f','g','h','j','k','l'])
    let set3=new Set(['z','x','c','v','b','n','m'])
    for(let i = 0;i<words.length;i++){
        let str = words[i].toLowerCase()
        let set = new Set()
        if(set1.has(str.charAt(0)))set=set1
        if(set2.has(str.charAt(0)))set=set2
        if(set3.has(str.charAt(0)))set=set3
        for(let j = 0;j<words[i].length;j++){
            if(!set.has(str.charAt(j))){
                break
            }
            if(j==str.length-1 && set.has(str.charAt(j))){
                arr.push(words[i])
            }
        }

    }
    return arr
};
console.log(findWords(["zxcvbnm"]));