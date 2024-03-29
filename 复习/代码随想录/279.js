var numSquares = function(n) {
    let dp = new Array(n+1).fill(Infinity)
    dp[0] = 0
    for(let i = 2;i<=n;i++){
        for(let j = 1;j*j<=i;j++){

                dp[i] = Math.min(dp[i-j*j]+1,dp[i])
      
        }
    }
    return dp[n]
};
console.log(numSquares(12))