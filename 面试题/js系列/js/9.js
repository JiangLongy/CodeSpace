let a = 1

function bar(){
    function foo(){// foo的词法作用域是bar bar 的词法作用域是全局
        // console.log(this.a)
        function baz(){
            console.log(this.a)
        }
        baz()
    }
    foo()
}

bar()