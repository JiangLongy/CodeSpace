function foo(){
    console.log(this.a);
}
var obj={
    a:2,
    // foo:foo()//undefind
    foo:foo
} 
obj.foo()