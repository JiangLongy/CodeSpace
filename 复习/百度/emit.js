class EventEmitter{
    constructor(){
        this.event = {}//'run':[fun]
    }
    on(type,cb){
        if(!this.event[type]){
            this.event[type] = [cb]
        }else{
            this.event[type].push(cb)
        }
    }
    once(type,cb){//只订阅一次
        const fn = (...args)=>{
            cb(...args)
            this.off(type,fn)
        }
        this.on(type,fn)

    }
    emit(type,...args){//派发事件
        if(!this.event[type]){
            return
        }else{
            this.event[type].forEach(cb=>{
                cb(...args)
            })
        }
    }
    off(type,cb){//取消订阅
        if(!this.event[type]){
            return
        }else{
            this.event[type]=this.event[type].filter(item => item!= cb);

        }
    }
}

Array.prototype.myMap = function(fn){
    let arr = this
    let res = []
    for(let i of arr){
        let ans = fn(i)
        res.push(ans)
    }
    return res
}

let arr = [1,2,3]

console.log(arr.myMap((i)=>i+1));