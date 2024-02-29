let count = 0;
function foo(){
    console.log(count);
}

function bar(){
    setTimeout(()=>{
        count = 1
    },1000)
}
foo()
bar()