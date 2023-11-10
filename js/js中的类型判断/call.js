var obj  = {
    a:1
}
function foo(){
    console.log(this.a);
}


Function.prototype.myCall = function(context){
    if(!(this instanceof Function)){
        throw new TypeError('myCall is not a function')
    }
    //Array.from(arguments) 将类数组转化为数组
    let args = Array.from(arguments).slice(1)//arguments.slice(1)
    context.fn = this
    //...args 将数组中的数解构出来
    let res = context.fn(...args) // 触发this隐式绑定规则
    delete context.fn//如果不删除 执行 console.log(obj)时会多出一个 fu：foo
    return res
}

foo.mycall(obj)