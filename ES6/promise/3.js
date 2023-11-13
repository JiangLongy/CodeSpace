function a(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('a');
            resolve('yes')//顺利执行 reject() 执行出错
        },2000)
    }) 
}
function b(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('b');
            resolve()
        },1500)
    }) 
}
function c(){
    setTimeout(()=>{
        console.log('c');
    })
}
// a()
// b()
// c()
//Promise.all([a(),b()]).then(c)//c 将c函数体传进去 加括号是将c()运行结果传进去
//a(),b() 要有返回promise的能力
//all必须要接收到的所b有的promise状态都为resolve，then才会调用
Promise.race([a(),b()])
.then(c)
.catch((err)=>{
    console.log(err);
})
//a,b谁快.then就接在谁后面执行
