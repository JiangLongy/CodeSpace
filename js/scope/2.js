var a = 1
function foo(){
    var a = 2
    console.log(a);
    function bar(){
        console.log(a);
    }
}
foo()//执行
//bar()//找不到bar()
