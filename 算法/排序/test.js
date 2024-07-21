let arr = [9,5,6,3,4,2,5,6,8,1,10,65]

// 冒泡排序

function bubbleSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        for(let j = 0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log("冒泡排序:"+bubbleSort(arr))

// 选择排序
function selectSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
           if(arr[j] < arr[i]){
            [arr[j],arr[i]] = [arr[i],arr[j]]
           }
        }
    }
    return arr
}
console.log("选择排序:"+selectSort(arr));

// 插入排序
function insertSort(arr){
    for(let i = 1;i<arr.length;i++){
        let last = i-1
        while(arr[i] < arr[last]){
            [arr[i],arr[last]] = [arr[last],arr[i]]
            last--
        }
    }
    return arr
}
console.log("插入排序:"+insertSort(arr));

// 快速排序
function quickSort(arr){
    if(arr.length<=1) return arr
    let left = []
    let right = []

    for(let i = 1;i<arr.length;i++){
        if(arr[i] < arr[0]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    quickSort(left)
    quickSort(right)
    return [...left,arr[0],...right]
}

console.log("快速排序:"+quickSort(arr));

function debounce(fn,delay){
    let timer
    return function(){
        let args = arguments
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}