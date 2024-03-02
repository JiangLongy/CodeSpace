// function* g(){
//     let a = 1
//     let b = yield a++
//     console.log(b);
//     let c = yield a++
// }
// let gen = g()
// console.log(gen.next());//读取到1，再释放当前yield
// console.log(gen.next(666));//next 可以接收参数，用于指定被我触发的yield的结果
// console.log(gen.next());

function* g(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for (const gen of g()) {
    console.log(gen);
}