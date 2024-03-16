// let a = 1;
// let b = a
// a = 2;
// console.log(b);

// let a = {
//     age:18
// }

// let b = a

// a.age = 20
// console.log(b)

let a = {
    n:1,
    // m:Symbol(2),
    v:123n,
    // d:function(){},
    p:null,
    k:{
        e:2
    }
}
// let b = JSON.parse(JSON.stringify(a))
let b = structuredClone(a)
console.log(b)
