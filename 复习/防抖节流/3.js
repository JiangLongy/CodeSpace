function dou(fn,delay,...arg){
    let timer
    return function(){
        let that = this
        if(timer){
            clearTimeout(timer)          
        }
        timer = setTimeout(()=>{
            fn.apply(that,arg)
        },delay)
    }
}
function jie(fn,delay,...arg){
    let timer
    return function(){
        let that = this
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(that,arg)
                timer = null
            },delay)
        }

    }
}
function fn(a,b){
    return a+b
}
const debouncedFn = dou(fn,3000)

debouncedFn(1, 2); // 不会立即执行
debouncedFn(3, 4); // 不会立即执行
debouncedFn(5, 6); // 不会立即执行
