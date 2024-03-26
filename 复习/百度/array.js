let arr = ['a','a','a','b','b','c']
// [['a',3],['b',2],['c',1]]

function change(arr){
    let obj = {}
    let ans=[]
    for(let i = 0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
        }
    }
    for(let i in obj){
        ans.push([i,obj[i]])
    }
    return ans
}

console.log(change(arr));