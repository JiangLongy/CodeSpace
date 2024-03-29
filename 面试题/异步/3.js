function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a');
            resolve('ok')
        },1000)
    })
}

function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b');
            resolve('yes')
        },1000)
    })
}
// a()
// .then((res)=>{
//     b()
// })
// .then((res)=>{
//     console.log('c');
// })

Promise.race([a(),b()]).then((res)=>{
    console.log('d');
})
Promise.all([a(),b()]).then((res)=>{
    console.log('e');
})