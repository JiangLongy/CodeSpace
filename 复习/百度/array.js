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

// {a:1,b:2}=>[['a',1],['b',2]] 相互转换
// str= '1,2,3-4,10' 判断区间是否合法 左边比右边大