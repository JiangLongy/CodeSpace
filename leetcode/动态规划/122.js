var maxProfit = function(prices) {
    let dp = new Array(prices.length+1).fill(0)
    dp[i] = Math.max(dp[i-1],prices[i]-prices[i-1])

};