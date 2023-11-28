let arr = [1,4,65,7,8,6,4,3,4]
function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    const base = arr[0]
    let left = [],right = []
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<base){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        
        }
    }
    left=quickSort(left)
    right = quickSort(right)
    return [...left,base,...right]

}
console.log(quickSort(arr));