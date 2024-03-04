var minPathSum = function(grid) {
    let dp = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(0));
    // dp[grid.length-1][grid[0].length-1] = grid[grid.length-1][grid[0].length-1]
    for(let i = grid.length-1;i>-1;i--){
        for(let j = grid[0].length-1;j>-1;j--){
            if(i === grid.length-1 && j === grid[0].length-1){
                dp[i][j] = grid[i][j]
            }else if(i === grid.length-1){
                dp[i][j] = grid[i][j] + dp[i][j+1]
            }else if(j === grid[0].length-1){
                dp[i][j] = grid[i][j] + dp[i+1][j]
            }else{
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j],dp[i][j+1])
            }
        }
    }
    return dp[0][0]
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));