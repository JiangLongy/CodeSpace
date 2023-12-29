Function.prototype.myBind = function(context,...args){
    //函数 this
    // this()
    if(typeof this!== "function"){
        throw new TypeError("error")
    }
    context = context || window//闭包之中
    let that = this;
    return function fn(...innerArgs){
        //this丢失
        if(this instanceof fn){
            return new that(...args,...innerArgs)
        }
        return that.apply(context,[...args,...innerArgs])
        //原先的函数执行，this 手动指定为context
    }
}
function sayHello(x, y, z) {
    console.log("函数中的",this);
    console.log("你好！",this.name);
    console.log(x + y + z);
}
const arrowFn = ()=>{}
let person = {
    name:"坤坤"
}
// arrowFn.myBind()
let bindFn = sayHello.myBind(person,1,2);
console.log(bindFn(3));