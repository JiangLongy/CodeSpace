var combinationSum4 = function(nums, target) {
    let dp = new Array(target+1).fill(0)
    dp[0] =1 
    for(let i = 0;i<=target ; i++){
        for(let j = 0; j<nums.length; j++ ){
            if(nums[j]<= i){
                dp[i] += dp[i-nums[j]]
            }
        }
    }
    return dp[target]
};

console.log(combinationSum4([1,2,3],4));