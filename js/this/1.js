 function identify(context){
    return context.name.toUpperCase()
 }

 function speek(context){
    var greeting  = "Hello,I'm" +identify(context);
    console.log(greeting);
 }

var me ={
    name:"Tom"
}
speek(me)