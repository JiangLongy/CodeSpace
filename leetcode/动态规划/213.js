var rob = function(nums) {
    let dp = new Array(nums.length + 1).fill(0)
    dp[0] = 0
    dp[1] = 0
    for(let i = 2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-2])
    }
};