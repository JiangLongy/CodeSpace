var co = require('co');

function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a 完成');
            resolve();
        },1000);
      
    });
   
}
function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b 完成');
            resolve();
        },500);
        
    });
}
function* c(){
    yield a();
    yield b();
}
function run(fn){
    let gen = fn();
    function next(err,data){
        let result = gen.next(data);
        if(result.done){
           return
        }
        result.value(next);
    }
    next()
}

co(c).then(()=>{
    console.log('generator3 完成');
})

