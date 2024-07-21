function curry(fn){
    let judge = (...args) => {
        if (args.length === fn.length) return fn(...args)
        return (...arg) => {
            return judge(...args, ...arg);
        }
    }
    return judge;
}

function add(a, b){
    return a + b;
}
let cur = curry(add)

console.log(cur(1)(2));

function a(){
    
}