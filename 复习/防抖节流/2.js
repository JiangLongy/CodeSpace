// function jie(fn,delay){
//     let pre = Data.now()
//     return function(){
//         if(Data.now()-pre>=delay){
//             fn.apply(this.arguments)
//             pre = Data.now()
//         }
//     }
// }

function throttle(fn,delay,...args){
    let timer;
    return function(){
        let that = this;
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(that,...args)
                timer = null
            },delay)
        }        
    }
}