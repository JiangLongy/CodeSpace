function foo(n){
    console.log(this.a,n);
}
var obj = {
    a:2
}
foo.call(obj,2)
foo.apply(obj,[100])//用数组装参数
var bar = foo.bind(obj,100)//bind的执行结果返回一个函数体
bar(200)