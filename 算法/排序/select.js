//每次都选剩余数组元素中的最小值放在剩余数组的最前面
let arr = [1,4,65,7,8,6,4,3,4]
function select(arr){
    const len = arr.length
    let minIndex = null
    for(let i = 0;i<len-1;i++){
         minIndex = i
        for(let j = i;j<len;j++){
            if(arr[j ]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr
}
console.log(select(arr))