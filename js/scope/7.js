// var obj = {
//     a:1,
//     b:2,
//     c:3
// }
function foo(obj){
    with(obj){
        a=2,
        b=3,
        c=4
    }
}
var obj2 ={
    b:1
}
foo(obj2)//with泄露
console.log(a);