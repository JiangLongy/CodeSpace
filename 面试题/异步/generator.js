
function* foo(){
    yield 'a' 
    yield 'b'
    yield 'c'
    return 'ending'
}
let gen = foo()//得到一个generator的实例对象

console.log(gen.next());//{value: 'a', done: false}
console.log(gen.next());//{value: 'b', done: false}
console.log(gen.next());//{value: 'c', done: false}
console.log(gen.next());//{value: 'ending', done: true}

// function* g(){
//     var o =1
//     yield o++
//     o = 5
//     o++
//     yield o++
//     yield o++
// }
// let gen = g() //迭代对象
// console.log(gen.next());
// console.log(gen.next());

// let gener = g()
// console.log(gener.next());