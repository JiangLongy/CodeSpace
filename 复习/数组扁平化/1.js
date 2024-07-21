let arr = [1,2,3,[5,6,8,7],[9]]

function a(arr){
    let res = []
    for(let item of arr){
        if(Array.isArray(item)){
            res.push(...a(item))
        }else{
            res.push(item)
        } 
    }
    return res
}
console.log(a(arr));