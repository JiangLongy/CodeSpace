var canPartition = function(nums) {
    let target = 0
    for( i in nums){
        target += nums[i]
    }
    if(target%2!==0) return false
    target = target/2
    let dp = new Array(target+1).fill(0)
    for(let i= 0;i<nums.length;i++){
        for(let j = target ;j>=0;j--){
            if(nums[i]>j){
                break
            }else{
                dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i]) 
            }
        }
    }
    return dp[target] === target
};
console.log(canPartition([1,5,11,5]))