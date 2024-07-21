function sort(arr){
    let left = []
    let right = []
    if(arr.length <=1 ){
        return arr
    }
    for(let i = 1;i<arr.length;i++){
        if(a(arr[0],arr[i])){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...sort(left),arr[0],...sort(right)]
}
function a(str1,str2){
    let arr1 = str1.split('.')
    let arr2 = str2.split('.')
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i] && arr2[i] ){
            if( arr1[i] != arr2[i]){
            return arr1[i] > arr2[i]
            }
        }else if(arr1[i]){
            return true
        }else{
            return false
        }
    }
}
let arr = ['1.34','1.2','1.4','3.3.3.3.3.3.3.4','3.3.3.3.3.3','6.2','1.2']
console.log(sort(arr));