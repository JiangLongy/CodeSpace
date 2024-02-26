var maxSubArray = function(nums) {
    if(nums.length == 0){
        return 0
    }
    let dp = new Array(nums.length+1).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0], nums[1]);

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2]);
    }

    return dp[nums.length-1];
};

console.log(maxSubArray([2,1,4,5,3,1,1,3])); // 输出 15
