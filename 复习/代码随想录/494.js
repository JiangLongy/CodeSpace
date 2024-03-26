var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((a, b) => a + b);
    let left = (sum + target) / 2;
    if((sum+target)%2)return 0
    if(target>sum) return 0
    let dp = new Array(left+1).fill(0)
    dp[0] = 1
    for(let i = 0;i<nums.length;i++){
        for(let j = left;j>=nums[i];j--){
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[left]
};
console.log(findTargetSumWays([1,1,1,1,1],3));
