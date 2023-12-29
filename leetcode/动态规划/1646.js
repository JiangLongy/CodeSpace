var getMaximumGenerated = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[1] = 1
    let max =1
    for(let i = 2;i<=n;i++){
        if(i%2==0){
            dp[i] = dp[i/2]
        }else{
            dp[i] = dp[i-1]+dp[i-2]
        }
        max = Math.max(dp[i],max)
    }
    return max
};
console.log(getMaximumGenerated(7));