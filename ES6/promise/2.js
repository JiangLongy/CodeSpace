function xq(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('龙哥相亲了');
            resolve('相亲成功')//可以抛出一个值在.then()接收
        },2000)
    })
}
function marry(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('龙哥结婚了');
            resolve()
        },1000)
    })
    
}
function baby(){
    setTimeout(()=>{
        console.log('小龙女出生');
    },500)
}
xq().then((res)=>{
    console.log(res);
    return marry()//如果不使用return marry()，那么后面的.then()会调用默认的promise 从而baby()
                  //与marry()一起执行，形成异步
})
.then((res2)=>{    
    baby()
})