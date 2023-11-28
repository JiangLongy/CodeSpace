let arr = [1,4,65,7,8,6,4,3,4]
function insertSort(arr){
    let len = arr.length
    for(let i = 1 ;i<len;i++){
        let last = i-1
        let j = i
       while(last>=0){
        if(arr[j]<arr[last ]){
            [arr[last],arr[j]] = [arr[j],arr[last]]
            j = last
        }else{
            break;
        }
        last--
       }
    }
    return arr
}
console.log(insertSort(arr))