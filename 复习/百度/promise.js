const fn =  ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('请求成功！')
    },6000)
  })
}

function delayTime(fn,delay){
    return new Promise((resolve,reject) =>{
        let timeOut = setTimeout(()=>{
            reject('任务超时')
        },delay)
        fn()
        .then((res)=>{
            clearTimeout(timeOut)
            resolve(res)
        })
        .catch((err)=>{
            clearTimeout(timeOut)
            reject(err)
        })
    })
}

delayTime(fn,5000)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
