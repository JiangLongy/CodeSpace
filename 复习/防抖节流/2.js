function jie(fn,delay){
    let pre = Data.now()
    return function(){
        if(Data.now()-pre>=delay){
            fn.apply(this.arguments)
            pre = Data.now()
        }
    }
}