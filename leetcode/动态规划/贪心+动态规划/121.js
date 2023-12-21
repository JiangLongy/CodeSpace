// 低买高卖 贪心算法 greedy
var maxProfit = function(prices) {
//流程 自顶向下 递归
    // 当天卖 dp[i] = Math.max(price-min,dp[i-1])
    // 自下向上迭代 dp[i]的每一个值都是最优
    // dp[0] = 0
    const dp = new Array(prices.length).fill(0)
    let min = prices[0]
    for(let i = 1;i<prices.length;i++){
        min = Math.min(prices[i],min)
        dp[i] = Math.max(dp[i-1],prices[i]-min)
    }
    return dp[prices.length-1]
    
};
maxProfit([7,1,5,3,6,4])