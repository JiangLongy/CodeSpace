// const num = 5
// console.log(5<<1);
// console.log(5>>1);

//如何实现一个高效率的整数的乘法和除法
function multiply(x,y){
    let res = 0
    while(y>0){
        if(y&1){
            res += x
        }
        x <<= 1
        y >>= 1
    }
    return res
}

function divide(x,y){
    let res = 0
    
    return res
}
console.log(multiply(2,3));