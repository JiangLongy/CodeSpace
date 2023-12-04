// var a= 1
// function foo(){
//     console.log(this.a);
// }
// foo()

function foo(){//[[scope]]
   var a = 2; 
   this.bar()
}
function bar(){
    console.log(this.a);
}

 
foo()