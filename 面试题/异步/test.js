function a(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log('a');
           resolve('666666666666');
       },1000)
    })
}
function b(){
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           console.log('b');
           resolve();
       },500)
    })
}
a().then((res)=>{
    b()
    console.log(res);
},
(err)=>{
    console.log(err);
})

