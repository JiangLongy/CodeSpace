let x = {
    // w:10,
    h:20
}
function computedArea(x){
    if(x.w && x.h){
        return x.w * x.h
    }else{
        return x.w?x.w:x.h
    }
}
console.log(computedArea(x));