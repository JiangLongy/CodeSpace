var a = 1
var bar = ()=>{
    console.log(this.a);
}
baz()

var obj = {
    name:"TOM",
    show:function(){
        // console.log(this);
        // var bar = function(){
        //     console.log(this.name);//undefind
        // }
        var bar = ()=>{
            console.log(this.name);//TOM
        }
        bar()
    }
    
}
obj.show()