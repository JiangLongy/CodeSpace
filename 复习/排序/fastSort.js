function fastSort(arr){
    let left = []
    let right = []
    if(arr.length<2){
        return arr
    }
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<arr[0]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
   
    console.log(left);
    console.log(right);
    return [ ...fastSort(left),arr[0], ...fastSort(right)]
}
let arr = [1,7,6,4,7,77,85,15,35,45,652]
console.log(fastSort(arr))