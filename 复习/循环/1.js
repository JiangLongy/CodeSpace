let arr = [1,2,3,4]
arr.forEach((item)=>{
    if(item === 2){
        return
    }
    console.log(item)
})

const a = arr.map(item=>{
    if(item === 2){
    }
    console.log(item)
})
console.log(a);