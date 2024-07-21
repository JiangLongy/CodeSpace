let obj = {
    name: 'zhangsan',
    age: 18,
}

let a = Symbol('a');
let b = Symbol(obj)
console.log(a);
console.log(b);

class c {
    constructor(){
        this[a] = a
    }
}
let c1 = new c();
console.log(c1.a);