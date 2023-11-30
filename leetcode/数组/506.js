var findRelativeRanks = function(score) {
    let arr1 = []
    let arr2 = []
    let len = score.length
    let arr = []
    for(let i = 0;i<score.length;i++){
        arr[i] = score[i]
    }
    arr.sort((a,b)=>b-a)
    for(let i = 0;i<len;i++){
        arr1.push(arr.indexOf(score[i])+1)
    }
    for(let i = 0;i<len;i++){
        if(arr1[i] == 1){
            arr2.push('Gold Medal')
        }else if(arr1[i] == 2){
            arr2.push('Silver Medal')
        }
        else if(arr1[i] == 3){
            arr2.push('Bronze Medal')
        }else{
            arr2.push(arr1[i]+"")
        }
    }
    return arr2
};  
console.log(findRelativeRanks([10,3,8,9,4]));