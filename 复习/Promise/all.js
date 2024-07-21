class MyPromise{
    static all(promises){
        return new MyPromise((resolve,reject)=>{
            let result=[],count=0;
            promises.forEach((item)=>{
                item.then((res)=>{
                    count++
                    result[i]=res;
                    if(count === promises.length){
                        resolve(result)
                    }                   
                },
                (err)=>{
                    reject(err)
                })
            })
            // for(let i = 0;i<promises.length;i++){
            //     promises[i].then((res)=>{
            //         count++
            //         result[i]=res;
            //         if(count === promises.length){
            //             resolve(result)
            //         }                   
            //     },
            //     (err)=>{
            //         reject(err)
            //     })
            // }
        })
    }

    static race(promises){
        return new MyPromise((resolve,reject)=>{
            for(let i = 0;i<promises.length;i++){
                promises[i].then((res)=>{
                    resolve(res)
                },
            (err)=>{
                reject(err)
            })
            }
        })
    }
    static any(promises){
        return new MyPromise((resolve,reject)=>{
            let arr = []
            let cur = 0
            for(let i = 0;i<promises.length;i++){
                promises[i].then((res)=>{
                    resolve(res)
                },(err)=>{
                    if(cur === promises.length){
                        reject(arr)
                    }else{
                        arr.push(err)
                    }
                })
            }
        })
        
    }
    static allset(promises,timeout){
        return new MyPromise((resolve,reject)=>{
            let result=[],count=0;
            for(let i = 0;i<promises.length;i++){
                promises[i].then((res)=>{
                    count++
                    result[i]=res;
                    if(count === promises.length){
                        resolve(result)
                    }                  
                    setTimeout(()=>{
                        reject(new Error('timeout'))
                    },timeout)
                },
                (err)=>{
                    reject(err)
                })
            }
        })
    }
}