function request(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num*10)
        },1000)
    })
}
function* gen(){
    const num1 = yield request(1)
    const num2 = yield request(num1)
    const num3 = yield request(num2)
    return num3
}

// 模拟async
function generatorToAsync(generatorFn){//把generatorFn变更成具有async功能的函数
    return function(){
        const gen = generatorFn()
        return new Promise((resolve,reject)=>{
            function loop(key,arg){
                let res = null
                res = gen[key](arg)//gen.next(arg) {value:Promise{},done:fasle}
                const {value,done} = res
                if(done){
                    return resolve(value)
                }else{
                    Promise.resolve(value) // Promise.resolve()接收一个Promsie对象会直接读取该参数对象中resolve的值
                   .then((val)=>{
                       loop('next',val)
                   })
                } 
            }
            loop('next')
           
        })
    }
}
const asyncFn = generatorToAsync(gen)
asyncFn().then((res)=>{
    console.log(res)
})

// async function fn(){
//     const num1 = await request(1)
//     const num2 = await request(num1)
//     const num3 = await request(num2)
//     console.log(num3);
// }

// fn()