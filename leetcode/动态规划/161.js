var maxSales = function(sales) {
    let dp = new Array(sales.length+1).fill(0)
    dp[0] = sales[0]
    let max = dp[0]
    for(let i = 1;i<sales.length;i++ ){
        dp[i] = dp[i-1]+sales[i]>sales[i]? dp[i-1]+sales[i]:sales[i]
        max = dp[i]>max?dp[i]:max
    }
    return max
};
console.log(maxSales([-2,1,-3,4,-1,2,1,-5,4]));