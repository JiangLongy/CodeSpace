var uniquePaths = function(m, n) {
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
    for(let i = 0;i<=m;i++){
        dp[i][0] = i
    }
    for(let j = 0;j<=n;j++){
        dp[0][j] = j
    }

    for(let i = 1;i<=m;i++){
        for(let j = 1;j<=n;j++){
            dp[i][j] = dp[i][j-1]+dp[i-1][j]
        }
    }
    return dp[m][n]
};