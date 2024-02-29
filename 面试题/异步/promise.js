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