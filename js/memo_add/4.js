//动态规划
function fibonacci(n){
    let a=1,b=1
    for(let i = 1;i<=n;i++){
       [a,b] = [b,b+a]
    }
    return b;      
}
console.log(5);