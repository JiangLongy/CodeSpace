class MyPromise{
    constructor(executor){
        this.state = 'pending';//promise 的状态
        this.value = undefined // 接收resolve的参数
        this.reason = undefined// 接收reject的参数
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (value)=>{
            if(this.state === 'pending'){
                this.state = 'fulfilled';
                this.value = value;
                // 把then里的回调函数触发
                this.onFulfilledCallbacks.forEach(fn=>{
                    fn(this.value)
                })
            }         
        }
        const reject = (reason)=>{
            if(this.state === 'pending'){
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn=>{
                    fn(this.reason)
                })
            }
        }
        executor(resolve,reject);
    }
    then(onFulfilled,onRejected){
        // 把onFulfilled 存起来 供resolve调用
        onFulfilled = typeof onFulfilled === 'function'?onFulfilled:()=>this.value;
        onRejected = typeof onRejected === 'function'?onRejected:()=>this.reason;

        //返回一个Promise
        return new MyPromise((resolve,reject)=>{
            //then前面的promise对象状态是同步变更完成了
            if(this.state === 'fulfilled'){
                setTimeout(()=>{//模拟异步 官方是微任务，这里用宏任务简化
                    try{
                        const result = onFulfilled(this.value);
                        resolve(result)//应该放的是result中的resolve的参数
                    }catch(err){
                        reject(err)
                    }
                   
                })
            }
            if(this.state === 'rejected'){
                setTimeout(()=>{
                    try{
                        const result = onRejected(this.reason);
                        resolve(result)
                    }catch(err){
                        reject(err)
                    }
                })
            }
            if(this.state === 'pending'){
                this.onFulfilledCallbacks.push((value)=>{
                    setTimeout(()=>{ // 为了保障将来onFulfilled在resolve中被调用时是一个异步
                        try{
                            const result = onFulfilled(value)
                            resolve(result)
                        }catch(err){
                            reject(err)
                        }
                        
                    })
                });
                this.onRejectedCallbacks.push((reason)=>{
                    setTimeout(()=>{
                        try{
                            const result = onRejected(reason)
                            resolve(result)
                        }catch(err){
                            reject(err)
                        }
                    })
                })
            }

        })     
    }
    static race (promises){
        return new MyPromise((resolve,reject)=>{
            //判断promises里面哪个对象的状态先变更
            for(let promise of promises){
                promise.then((value)=>{
                   resolve(value)
                })              
            }
        })
    }
    static all(promises){
        return new MyPromise((resolve,reject)=>{
            let count = 0;
            let arr = []
            for(let i=0 ; i< promises.length ; i++){
                promises[i].then(
                    (value)=>{
                        count++
                        arr[i]=value
                        if(count === promises.length){
                            resolve(arr)
                        }
                    },
                    (reason)=>{
                        reject(reason)
                    }
                )
            }
        })
    }
}

// function MyPromise(executor){
//     const resolve = ()=>{

//     }
//     const reject = ()=>{

//     }
//     executor(resolve,reject);

// }
let p = new MyPromise((resolve,reject)=>{
    resolve('123')
})
console.log(p);