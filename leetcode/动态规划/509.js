var fib = function(n) {
    return n<2?n:fib(n-1)+fib(n-2)
};
function memorize(fn){
    if(typeof fn !== 'function'){
        return
    }
    var cache = {}
    return function(){
        var key = Array.prototype.join.call(arguments)
        if(key in cache){
            return cache[key]
        }
        else{
            return cache[key] = fn.apply(this,arguments)
        }
    }
}
let memer = memorize(fib);
console.log(memer(10));

