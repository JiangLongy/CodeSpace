function dou(fn,delay){
    let timer
    return function(){
        let arg = arguments
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
           fn.call(this,...arg)
        },delay)
    }
}