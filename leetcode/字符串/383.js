var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length>magazine.length){
        return false
    }
    let i = 0
    while(i<ransomNote.length){
        if(sum(ransomNote,ransomNote[i]) > sum(magazine,ransomNote[i])){
            return false
        }
        i++
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