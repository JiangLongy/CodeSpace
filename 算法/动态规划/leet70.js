var climbStairs = function(n) {
    let f = []
    f[0] = 0
    f[1] = 1
    f[2] = 2
    for(let i = 3;i<=n;i++){
       f[i] = f[i-1] + f[i-2]
    }
    return f[n]
};
console.log(climbStairs(3));
//找状态转移方程