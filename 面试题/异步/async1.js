function request(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num*10)
        },1000)
    })
}
async function test(){
    let res1 = await request(1)
    let res2 = await request(10)
    console.log(res1,res2);
}
test()

function* gen(){
    const num1 = yield request(1)
    const num2 = yield request(num1)
    const num3 = yield request(num2)
    return num3
}
const gen1 = gen()
const next1 = gen1.next()
next1.value.then((res)=>{
    const next2 = gen1.next(res)
    console.log(res);
    next2.value.then((res)=>{
        const next3 = gen1.next(res)
        console.log(res);
        next3.value.then((res)=>{
            console.log(res)
        })
    })
})
