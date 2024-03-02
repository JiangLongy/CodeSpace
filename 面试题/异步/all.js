function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a');
            resolve('a')
        },1000)
    })
}
function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b');
            resolve('b')
        },500)
    })
}
function c(){
    console.log('c');
}
Promise.all([a(),b()]).then((res)=>{
    console.log(res)
    c()
})