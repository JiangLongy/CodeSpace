var b = 1
function foo(a){
console.log(a+b);//NaN a+undefined
}
foo(2)
b =1