var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    const dp = new Array(n + 1);

    // 初始化dp数组
    dp[0] = cost[0];
    dp[1] = cost[1];

    // 计算dp数组
    for (let i = 2; i <= n; i++) {
        const currentCost = (i === n) ? 0 : cost[i]; // 最后一步不需要支付费用
        dp[i] = currentCost + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n], dp[n - 1]);
};