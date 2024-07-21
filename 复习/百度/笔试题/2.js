let obj = {
    fn:function(){
        console.log(this);
    }
}

obj.fn()

let obj2 = {
    fn:()=>{
        console.log(this);
    }
}
obj2.fn()
